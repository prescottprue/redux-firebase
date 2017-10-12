import { authReducer } from './auth';
import { errorsReducer } from './errors';
import { profileReducer } from './profile';
import {
  AUTHENTICATION_INIT_STARTED,
  AUTHENTICATION_INIT_FINISHED,
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  UNAUTHORIZED_ERROR,
} from './actionTypes';
import {
  timestampsReducer,
  listenersReducer,
  requestedReducer,
  requestingReducer,
} from './rtdb';
import {
  dataReducer,
  orderedReducer,
} from './rtdb/rtdbReducers';

/**
 * Combine reducers utility (abreveated version of redux's combineReducer).
 * Turns an object whose values are different reducer functions, into a single
 * reducer function.
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one.
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 * @private
 */
export function combineReducers(reducers) {
  return (state = {}, action) =>
    Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action); // eslint-disable-line no-param-reassign
      return nextState;
    }, {});
}

/**
 * Reducer for isInitializing state. Changed by `AUTHENTICATION_INIT_STARTED`
 * and `AUTHENTICATION_INIT_FINISHED` actions.
 * @param  {Object} [state=false] - Current isInitializing redux state
 * @param  {object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @return {Object} Profile state after reduction
 */
export const isInitializingReducer = (state = false, action) => {
  switch (action.type) {
    case AUTHENTICATION_INIT_STARTED:
      return true;
    case AUTHENTICATION_INIT_FINISHED:
      return false;
    default:
      return state;
  }
};

/**
 * Reducer for authError state. Changed by `LOGIN`, `LOGOUT`, `LOGIN_ERROR`, and
 * `UNAUTHORIZED_ERROR` actions.
 * @param  {Object} [state={}] - Current authError redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @return {Object} authError state after reduction
 */
export const authErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return {};
    case LOGIN_ERROR:
    case UNAUTHORIZED_ERROR:
      return action.authError;
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
export default combineReducers({
  requesting: requestingReducer,
  requested: requestedReducer,
  timestamps: timestampsReducer,
  data: dataReducer,
  ordered: orderedReducer,
  auth: authReducer,
  authError: authErrorReducer,
  profile: profileReducer,
  listeners: listenersReducer,
  isInitializing: isInitializingReducer,
  errors: errorsReducer,
});
