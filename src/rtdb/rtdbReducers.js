import { pick, get } from 'lodash';
import { setWith, assign } from 'lodash/fp';
import {
  SET,
  MERGE,
  LOGOUT,
  NO_VALUE,
} from '../actionTypes';
import { getDotStrPath } from '../utils';

/**
 * Creates reducer for data state. Used to create data and ordered reducers.
 * Changed by `SET` or `SET_ORDERED` (if actionKey === 'ordered'), `MERGE`,
 * `NO_VALUE`, and `LOGOUT` actions.
 * @param  {Object} [state={}] - Current data redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @param  {String} action.path - Path of action that was dispatched
 * @return {Object} Data state after reduction
 * @private
 */
const createDataReducer = (actionKey = 'data') => (state = {}, action) => {
  switch (action.type) {
    case SET:
      return setWith(
        Object,
        getDotStrPath(action.path),
        action[actionKey],
        state,
      );
    case MERGE:
      const previousData = get(state, getDotStrPath(action.path), {});
      const mergedData = assign(previousData, action[actionKey]);
      return setWith(Object, getDotStrPath(action.path), mergedData, state);
    case NO_VALUE:
      return setWith(Object, getDotStrPath(action.path), null, state);
    case LOGOUT:
      // support keeping data when logging out - #125
      if (action.preserve) {
        return pick(state, action.preserve); // pick returns a new object
      }
      return {};
    default:
      return state;
  }
};

/**
 * Reducer for data state. Changed by `SET`, `SET_ORDERED`,`NO_VALUE`, and
 * `LOGOUT` actions.
 * @param  {Object} [state={}] - Current data redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @param  {String} action.path - Path of action that was dispatched
 * @return {Object} Data state after reduction
 */
export const dataReducer = createDataReducer();

/**
 * Reducer for ordered state. Changed by `SET`, `SET_ORDERED`,`NO_VALUE`, and
 * `LOGOUT` actions.
 * @param  {Object} [state={}] - Current data redux state
 * @param  {Object} action - Object containing the action that was dispatched
 * @param  {String} action.type - Type of action that was dispatched
 * @param  {String} action.path - Path of action that was dispatched
 * @return {Object} Data state after reduction
 */
export const orderedReducer = createDataReducer('ordered');

export default { dataReducer, orderedReducer };
