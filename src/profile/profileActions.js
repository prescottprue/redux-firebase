import { isArray, isString, isFunction, forEach } from 'lodash';
import { actionTypes } from '../constants';
import { getLoginMethodAndParams } from '../utils/auth';
import { promisesForPopulate } from '../utils/populate';

/**
 * @description Remove listener from user profile
 * @param {Object} firebase - Internal firebase object
 * @private
 */
export const unWatchUserProfile = (firebase) => {
  const authUid = firebase._.authUid;
  const userProfile = firebase._.config.userProfile;
  if (firebase._.profileWatch) {
    firebase
      .database()
      .ref()
      .child(`${userProfile}/${authUid}`)
      .off('value', firebase._.profileWatch);
    firebase._.profileWatch = null; // eslint-disable-line no-param-reassign
  }
};

/**
 * @description Watch user profile. Internally dispatches SET_PROFILE actions
 * @param {Function} dispatch - Action dispatch function
 * @param {Object} firebase - Internal firebase object
 * @private
 */
export const watchUserProfile = (dispatch, firebase) => {
  const { authUid, config: { userProfile } } = firebase._;
  unWatchUserProfile(firebase);

  if (userProfile && firebase.database) {
    firebase._.profileWatch = firebase // eslint-disable-line no-param-reassign
      .database()
      .ref()
      .child(`${userProfile}/${authUid}`)
      .on('value', (snap) => {
        const {
          profileParamsToPopulate,
          autoPopulateProfile,
        } = firebase._.config;
        if (
          !profileParamsToPopulate ||
          (!isArray(profileParamsToPopulate) &&
            !isString(profileParamsToPopulate))
        ) {
          dispatch({ type: actionTypes.SET_PROFILE, profile: snap.val() });
        } else {
          // TODO: Share population logic with query action
          // Convert each populate string in array into an array of once query promises
          promisesForPopulate(
            firebase,
            snap.key,
            snap.val(),
            profileParamsToPopulate,
          ).then((data) => {
            // Fire actions for placement of data gathered in populate into redux
            forEach(data, (result, path) => {
              dispatch({
                type: actionTypes.SET,
                path,
                data: result,
                timestamp: Date.now(),
                requesting: false,
                requested: true,
              });
            });
            dispatch({ type: actionTypes.SET_PROFILE, profile: snap.val() });
            // Dispatch action with profile combined with populated parameters
            // Auto Populate profile
            if (autoPopulateProfile) {
              console.warn(
                // eslint-disable-line no-console
                'Auto populate is no longer supported. We are working on backwards compatibility for v2.0.0',
              );
            }
          });
        }
      });
  }
};

/**
 * @description Create user profile if it does not already exist. `updateProfileOnLogin: false`
 * can be passed to config to disable updating. Profile factory is applied if it exists and is a function.
 * @param {Function} dispatch - Action dispatch function
 * @param {Object} firebase - Internal firebase object
 * @param {Object} userData - User data object (response from authenticating)
 * @param {Object} profile - Profile data to place in new profile
 * @return {Promise}
 * @private
 */
export const createUserProfile = (dispatch, firebase, userData, profile) => {
  const { _: { config } } = firebase;
  if (!config.userProfile || !firebase.database) {
    return Promise.resolve(userData);
  }

  // use profileFactory if it exists in config
  if (isFunction(config.profileFactory)) {
    // catch errors in user provided profileFactory function
    try {
      profile = config.profileFactory(userData, profile); // eslint-disable-line no-param-reassign
    } catch (err) {
      console.error(
        // eslint-disable-line no-console
        'Error occured within profileFactory function:',
        err.message || err,
      );
      return Promise.reject(err);
    }
  }

  // Check for user's profile at userProfile path if provided
  return firebase
    .database()
    .ref()
    .child(`${config.userProfile}/${userData.uid}`)
    .once('value')
    .then(
      profileSnap =>
        // update profile only if doesn't exist or if set by config
        !config.updateProfileOnLogin && profileSnap.val() !== null
          ? profileSnap.val()
          : profileSnap.ref.update(profile).then(() => profile), // Update the profile
    )
    .catch((err) => {
      // Error reading user profile
      dispatch({ type: actionTypes.UNAUTHORIZED_ERROR, authError: err });
      return Promise.reject(err);
    });
};

/**
 * @description Update user profile
 * @param {Function} dispatch - Action dispatch function
 * @param {Object} firebase - Internal firebase object
 * @param {Object} userData - User data object (response from authenticating)
 * @param {Object} profile - Profile data to place in new profile
 * @return {Promise}
 * @private
 */
export const updateProfile = (dispatch, firebase, profileUpdate) => {
  const { database, _: { config, authUid } } = firebase;
  dispatch({
    type: actionTypes.PROFILE_UPDATE_START,
    payload: profileUpdate,
  });
  const profileRef = database().ref(`${config.userProfile}/${authUid}`);
  return profileRef
    .update(profileUpdate)
    .then(() =>
      profileRef.once('value').then((snap) => {
        dispatch({
          type: actionTypes.PROFILE_UPDATE_SUCCESS,
          payload: snap.val(),
        });
        return snap;
      }),
    )
    .catch((payload) => {
      dispatch({ type: actionTypes.PROFILE_UPDATE_ERROR, payload });
      return Promise.reject(payload);
    });
};

export default {
  unWatchUserProfile,
  watchUserProfile,
  createUserProfile,
  updateProfile,
};
