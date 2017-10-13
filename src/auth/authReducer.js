import { actionTypes } from '../constants';

const {
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  // AUTHENTICATION_INIT_STARTED,
  // AUTHENTICATION_INIT_FINISHED,
  AUTH_LINK_SUCCESS,
  AUTH_UPDATE_SUCCESS,
} = actionTypes;

/**
 * Reducer for auth state. Changed by `LOGIN`, `LOGOUT`, and `LOGIN_ERROR` actions.
 * @param  {Object} [state={isLoaded: false}] - Current auth redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @return {Object} Profile state after reduction
 */
export const authReducer = (
  state = { isLoaded: false, isEmpty: true },
  action,
) => {
  switch (action.type) {
    case LOGIN:
    case AUTH_UPDATE_SUCCESS:
      if (!action.auth) {
        return {
          isEmpty: true,
          isLoaded: true,
        };
      }
      const auth = action.auth.toJSON ? action.auth.toJSON() : action.auth;
      return { ...auth, isEmpty: false, isLoaded: true };
    case AUTH_LINK_SUCCESS:
      if (!action.payload) {
        return {
          isEmpty: true,
          isLoaded: true,
        };
      }
      return {
        ...(action.payload.toJSON ? action.payload.toJSON() : action.payload),
        isEmpty: false,
        isLoaded: true,
      };
    case LOGIN_ERROR:
      // TODO: Support keeping data when logging out
      return { isLoaded: true, isEmpty: true };
    case LOGOUT:
      return { isLoaded: true, isEmpty: true };
    default:
      return state;
  }
};

/**
 * @name firebaseStateReducer
 * @description Reducer for react redux firebase. This function is called
 * automatically by redux every time an action is fired. Based on which action
 * is called and its payload, the reducer will update redux state with relevant
 * changes.
 * @param {Object} state - Current Redux State
 * @param {Object} action - Action which will modify state
 * @param {String} action.type - Type of Action being called
 * @param  {String} action.path - Path of action that was dispatched
 * @param {String} action.data - Data associated with action
 * @return {Object} Firebase redux state
 */
export default authReducer;
