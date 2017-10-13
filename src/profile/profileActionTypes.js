import { actionsPrefix } from '../constants';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} SET_PROFILE - `@@reduxFirebase/SET_PROFILE`
 * @example
 * import { actionTypes } from 'redux-firebase/actionTypes'
 * actionTypes.SET === '@@reduxFirebase/SET' // true
*/
export const authActionTypes = {
  SET_PROFILE: `${actionsPrefix}/SET_PROFILE`,
};

export default authActionTypes;
