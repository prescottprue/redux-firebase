import { SET_PROFILE, LOGOUT, LOGIN_ERROR } from '../actionTypes';

/**
 * Reducer for profile state. Changed by `SET_PROFILE`, `LOGOUT`, and
 * `LOGIN_ERROR` actions.
 * @param  {Object} [state={isLoaded: false}] - Current profile redux state
 * @param  {object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @return {Object} Profile state after reduction
 */
export const profileReducer = (state = { isLoaded: false, isEmpty: true }, action) => {
  switch (action.type) {
    case SET_PROFILE:
      if (!action.profile) {
        return {
          ...state,
          isEmpty: true,
          isLoaded: true,
        };
      }
      return {
        ...state,
        ...action.profile,
        isEmpty: false,
        isLoaded: true,
      };
    case LOGOUT:
    case LOGIN_ERROR:
      return { isLoaded: true, isEmpty: true };
    default:
      return state;
  }
};


export default profileReducer;
