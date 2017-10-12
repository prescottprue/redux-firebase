import { actionsPrefix } from '../constants';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} START - `@@reduxFirebase/START`
 * @property {String} SET - `@@reduxFirebase/SET`
 * @property {String} MERGE - `@@reduxFirebase/MERGE`
 * @property {String} NO_VALUE - `@@reduxFirebase/NO_VALUE`
 * @property {String} SET_LISTENER - `@@reduxFirebase/SET_LISTENER`
 * @property {String} UNSET_LISTENER - `@@reduxFirebase/UNSET_LISTENER`
 * @example
 * import { actionTypes } from 'redux-firebase/actionTypes'
 * actionTypes.SET === '@@reduxFirebase/SET' // true
*/
export const rtdbActionTypes = {
  START: `${actionsPrefix}/START`,
  SET: `${actionsPrefix}/SET`,
  MERGE: `${actionsPrefix}/MERGE`,
  NO_VALUE: `${actionsPrefix}/NO_VALUE`,
  SET_LISTENER: `${actionsPrefix}/SET_LISTENER`,
  UNSET_LISTENER: `${actionsPrefix}/UNSET_LISTENER`,
};

export default rtdbActionTypes;
