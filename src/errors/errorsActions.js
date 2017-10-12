import { actionTypes } from '../constants';

/**
 * @description Dispatch login error action
 * @param {Function} dispatch - Action dispatch function
 * @param {Object} authError - Error object
 * @private
 */
const dispatchLoginError = (dispatch, authError) =>
  dispatch({
    type: actionTypes.LOGIN_ERROR,
    authError,
  });

export default {
  dispatchLoginError,
};
