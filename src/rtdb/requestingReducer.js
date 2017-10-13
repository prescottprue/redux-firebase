import {
  START,
  SET,
  NO_VALUE,
} from './rtdbActionTypes';
import { getSlashStrPath } from '../utils';

/**
 * Reducer for requesting state.Changed by `START`, `NO_VALUE`, and `SET` actions.
 * @param  {Object} [state={}] - Current requesting redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @param  {String} action.path - Path of action that was dispatched
 * @return {Object} Profile state after reduction
 */
export default function requestingReducer(state = {}, { type, path }) {
  switch (type) {
    case START:
      return {
        ...state,
        [getSlashStrPath(path)]: true,
      };
    case NO_VALUE:
    case SET:
      return {
        ...state,
        [getSlashStrPath(path)]: false,
      };
    default:
      return state;
  }
}
