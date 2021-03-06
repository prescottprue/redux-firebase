/**
 * @constant
 * @type {String}
 * @description Prefix for all actions within library
 * @example
 * import { constants } from 'react-redux-firebase'
 * constants.actionsPrefix === '@@reduxFirebase' // true
*/
export const actionsPrefix = '@@reduxFirebase';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} START - `@@reduxFirebase/START`
 * @property {String} SET - `@@reduxFirebase/SET`
 * @property {String} MERGE - `@@reduxFirebase/MERGE`
 * @property {String} SET_PROFILE - `@@reduxFirebase/SET_PROFILE`
 * @property {String} LOGIN - `@@reduxFirebase/LOGIN`
 * @property {String} LOGOUT - `@@reduxFirebase/LOGOUT`
 * @property {String} LOGIN_ERROR - `@@reduxFirebase/LOGIN_ERROR`
 * @property {String} NO_VALUE - `@@reduxFirebase/NO_VALUE`
 * @property {String} UNAUTHORIZED_ERROR - `@@reduxFirebase/UNAUTHORIZED_ERROR`
 * @property {String} ERROR - `@@reduxFirebase/ERROR`
 * @property {String} SET_LISTENER - `@@reduxFirebase/SET_LISTENER`
 * @property {String} UNSET_LISTENER - `@@reduxFirebase/UNSET_LISTENER`
 * @property {String} AUTHENTICATION_INIT_STARTED - `@@reduxFirebase/AUTHENTICATION_INIT_STARTED`
 * @property {String} AUTHENTICATION_INIT_FINISHED - `@@reduxFirebase/AUTHENTICATION_INIT_FINISHED`
 * @property {String} SESSION_START - `@@reduxFirebase/SESSION_START`
 * @property {String} SESSION_END - `@@reduxFirebase/SESSION_END`
 * @property {String} FILE_UPLOAD_START - `@@reduxFirebase/FILE_UPLOAD_START`
 * @property {String} FILE_UPLOAD_ERROR - `@@reduxFirebase/FILE_UPLOAD_ERROR`
 * @property {String} FILE_UPLOAD_PROGRESS - `@@reduxFirebase/FILE_UPLOAD_PROGRESS`
 * @property {String} FILE_UPLOAD_COMPLETE - `@@reduxFirebase/FILE_UPLOAD_COMPLETE`
 * @property {String} FILE_DELETE_START - `@@reduxFirebase/FILE_DELETE_START`
 * @property {String} FILE_DELETE_ERROR - `@@reduxFirebase/FILE_DELETE_ERROR`
 * @property {String} FILE_DELETE_COMPLETE - `@@reduxFirebase/FILE_DELETE_COMPLETE`
 * @property {String} AUTH_UPDATE_START - `@@reduxFirebase/AUTH_UPDATE_START`
 * @property {String} AUTH_UPDATE_ERROR - `@@reduxFirebase/AUTH_UPDATE_ERROR`
 * @property {String} AUTH_UPDATE_SUCCESS - `@@reduxFirebase/AUTH_UPDATE_SUCCESS`
 * @property {String} PROFILE_UPDATE_START - `@@reduxFirebase/PROFILE_UPDATE_START`
 * @property {String} PROFILE_UPDATE_ERROR - `@@reduxFirebase/PROFILE_UPDATE_ERROR`
 * @property {String} PROFILE_UPDATE_SUCCESS - `@@reduxFirebase/PROFILE_UPDATE_SUCCESS`
 * @property {String} EMAIL_UPDATE_START - `@@reduxFirebase/EMAIL_UPDATE_START`
 * @property {String} EMAIL_UPDATE_ERROR - `@@reduxFirebase/EMAIL_UPDATE_ERROR`
 * @property {String} EMAIL_UPDATE_SUCCESS - `@@reduxFirebase/EMAIL_UPDATE_SUCCESS`
 * @property {String} AUTH_RELOAD_START - `@@reduxFirebase/AUTH_RELOAD_START`
 * @property {String} AUTH_RELOAD_ERROR - `@@reduxFirebase/AUTH_RELOAD_ERROR`
 * @property {String} AUTH_RELOAD_SUCCESS - `@@reduxFirebase/AUTH_RELOAD_SUCCESS`
 * @property {String} AUTH_LINK_START - `@@reduxFirebase/AUTH_LINK_START`
 * @property {String} AUTH_LINK_ERROR - `@@reduxFirebase/AUTH_LINK_ERROR`
 * @property {String} AUTH_LINK_SUCCESS - `@@reduxFirebase/AUTH_LINK_SUCCESS`
 * @property {String} AUTH_EMPTY_CHANGE - `@@reduxFirebase/AUTH_LINK_SUCCESS`
 * @example
 * import { actionTypes } from 'react-redux-firebase'
 * actionTypes.SET === '@@reduxFirebase/SET' // true
*/
export const actionTypes = {
  START: `${actionsPrefix}/START`,
  SET: `${actionsPrefix}/SET`,
  MERGE: `${actionsPrefix}/MERGE`,
  SET_PROFILE: `${actionsPrefix}/SET_PROFILE`,
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  NO_VALUE: `${actionsPrefix}/NO_VALUE`,
  UNAUTHORIZED_ERROR: `${actionsPrefix}/UNAUTHORIZED_ERROR`,
  ERROR: `${actionsPrefix}/ERROR`,
  SET_LISTENER: `${actionsPrefix}/SET_LISTENER`,
  UNSET_LISTENER: `${actionsPrefix}/UNSET_LISTENER`,
  AUTHENTICATION_INIT_STARTED: `${actionsPrefix}/AUTHENTICATION_INIT_STARTED`,
  AUTHENTICATION_INIT_FINISHED: `${actionsPrefix}/AUTHENTICATION_INIT_FINISHED`,
  SESSION_START: `${actionsPrefix}/SESSION_START`,
  SESSION_END: `${actionsPrefix}/SESSION_END`,
  FILE_UPLOAD_START: `${actionsPrefix}/FILE_UPLOAD_START`,
  FILE_UPLOAD_ERROR: `${actionsPrefix}/FILE_UPLOAD_ERROR`,
  FILE_UPLOAD_PROGRESS: `${actionsPrefix}/FILE_UPLOAD_PROGRESS`,
  FILE_UPLOAD_COMPLETE: `${actionsPrefix}/FILE_UPLOAD_COMPLETE`,
  FILE_DELETE_START: `${actionsPrefix}/FILE_DELETE_START`,
  FILE_DELETE_ERROR: `${actionsPrefix}/FILE_DELETE_ERROR`,
  FILE_DELETE_COMPLETE: `${actionsPrefix}/FILE_DELETE_COMPLETE`,
  AUTH_UPDATE_START: `${actionsPrefix}/AUTH_UPDATE_START`,
  AUTH_UPDATE_SUCCESS: `${actionsPrefix}/AUTH_UPDATE_SUCCESS`,
  AUTH_UPDATE_ERROR: `${actionsPrefix}/AUTH_UPDATE_ERROR`,
  PROFILE_UPDATE_START: `${actionsPrefix}/PROFILE_UPDATE_START`,
  PROFILE_UPDATE_SUCCESS: `${actionsPrefix}/PROFILE_UPDATE_SUCCESS`,
  PROFILE_UPDATE_ERROR: `${actionsPrefix}/PROFILE_UPDATE_ERROR`,
  EMAIL_UPDATE_START: `${actionsPrefix}/EMAIL_UPDATE_START`,
  EMAIL_UPDATE_SUCCESS: `${actionsPrefix}/EMAIL_UPDATE_SUCCESS`,
  EMAIL_UPDATE_ERROR: `${actionsPrefix}/EMAIL_UPDATE_ERROR`,
  AUTH_RELOAD_START: `${actionsPrefix}/AUTH_RELOAD_START`,
  AUTH_RELOAD_ERROR: `${actionsPrefix}/AUTH_RELOAD_ERROR`,
  AUTH_RELOAD_SUCCESS: `${actionsPrefix}/AUTH_RELOAD_SUCCESS`,
  AUTH_LINK_START: `${actionsPrefix}/AUTH_LINK_START`,
  AUTH_LINK_ERROR: `${actionsPrefix}/AUTH_LINK_ERROR`,
  AUTH_LINK_SUCCESS: `${actionsPrefix}/AUTH_LINK_SUCCESS`,
  AUTH_EMPTY_CHANGE: `${actionsPrefix}/AUTH_EMPTY_CHANGE`,
};

/**
 * @constant
 * @type {Object}
 * @name defaultConfig
 * @description Default configuration options
 * @property {String} userProfile - `null` Location on Firebase where user
 * profiles are stored. Often set to `'users'`.
 * @property {String|Function} presence - `null` Location on Firebase where of currently
 * online users is stored. Often set to `'presence'` or `'onlineUsers'`. If a function
 * is passed, the arguments are: `(currentUser, firebase)`.
 * @property {String|Function} sessions - `sessions` Location on Firebase where user
 * sessions are stored (only if presense is set). Often set to `'sessions'` or
 * `'userSessions'`. If a function is passed, the arguments are: `(currentUser, firebase)`.
 * @property {Boolean} enableLogging - `false` Whether or not firebase
 * database logging is enabled.
 * @property {Array} preserveOnLougout - `null` Data parameters to preserve when
 * logging out.
 * @property {Boolean} updateProfileOnLogin - `true` Whether or not to update
 * user profile when logging in.
 * @property {Boolean} resetBeforeLogin - `true` Whether or not to reset auth
 * and profile when logging in (see issue #254 for more details).
 * @property {Boolean} enableRedirectHandling - `true` Whether or not to enable
 * redirect handling. This must be disabled if environment is not http/https
 * such as with react-native.
 * @property {Boolean} enableEmptyAuthChanges - `false` Whether or not to enable
 * empty auth changes. When set to true, `onAuthStateChanged` will be fired with,
 * empty auth changes such as `undefined` on initialization
 * (see [#137](https://github.com/prescottprue/react-redux-firebase/issues/137)).
 * Requires `v1.5.0-alpha` or higher.
 * @property {Boolean} autoPopulateProfile - `false` REMOVED FROM v2.0.0. Whether or not to
 * automatically populate profile with data loaded through
 * profileParamsToPopulate config.
 * @property {Boolean} setProfilePopulateResults - `true` Whether or not to
 * call SET actions for data that results from populating profile to redux under
 * the data path. For example role parameter on profile populated from 'roles'
 * root. True will call SET_PROFILE as well as a SET action with the role that
 * is loaded (places it in data/roles).
 * @property {Boolean} dispatchOnUnsetListener - `false` Whether or not to
 * dispatch UNSET_LISTENER when disabling listeners for a specific path. USE WITH CAUTION
 * Setting this to true allows an action to be called that removes data
 * from redux (which might not always be expected).
 * @property {String} firebaseStateName - 'firebase' Assumed name of Firebase
 * state (name given when passing reducer to combineReducers). Used in
 * firebaseAuthIsReady promise (see #264).
 * @property {Boolean} attachAuthIsReady - `true` Whether or not to attach
 * firebaseAuthIsReady to store. authIsLoaded can be imported and used
 * directly instead based on preference.
 * @type {Object}
*/
export const defaultConfig = {
  userProfile: null,
  presence: null,
  sessions: 'sessions',
  enableLogging: false,
  resetBeforeLogin: true,
  updateProfileOnLogin: true,
  enableRedirectHandling: true,
  autoPopulateProfile: false,
  setProfilePopulateResults: false,
  dispatchOnUnsetListener: true,
  enableEmptyAuthChanges: false,
  firebaseStateName: 'firebase',
  attachAuthIsReady: true,
};

/**
 * @constant
 * @type {Array}
 * @description List of all external auth providers that are supported
 * (firebase's email/anonymous included by default).
 * @private
*/
export const supportedAuthProviders = [
  'google',
  'github',
  'twitter',
  'facebook',
];

/**
 * @constant
 * @description Top level redux paths that can be populated
 * @type {Array}
 * @private
 */
export const topLevelPaths = ['auth', 'profile', 'ordered', 'data'];

export default {
  actionTypes,
  defaultConfig,
};
