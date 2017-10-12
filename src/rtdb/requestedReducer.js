import { START, SET, NO_VALUE } from '../actionTypes';
import { getSlashStrPath } from '../utils';

/**
 * Reducer for requested state. Changed by `START`, `NO_VALUE`, and `SET` actions.
 * @param  {Object} [state={}] - Current requested redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @param  {String} action.path - Path of action that was dispatched
 * @return {Object} Profile state after reduction
 */

export default function requestedReducer(state = {}, { type, path }) {
  switch (type) {
    case START:
      return {
        ...state,
        [getSlashStrPath(path)]: false,
      };
    case NO_VALUE:
    case SET:
      return {
        ...state,
        [getSlashStrPath(path)]: true,
      };
    default:
      return state;
  }
}
