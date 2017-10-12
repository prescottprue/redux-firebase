import { authActionTypes } from '../auth';
import { LOGIN_ERROR, UNAUTHORIZED_ERROR } from './errorsActionTypes';

/**
 * Reducer for errors state. Changed by `UNAUTHORIZED_ERROR`
 * and `LOGOUT` actions.
 * @param  {Object} [state=[]] - Current authError redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @return {Object} Profile state after reduction
 */
export const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_ERROR:
    case UNAUTHORIZED_ERROR:
      return [...state, action.authError];
    case authActionTypes.LOGOUT:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
