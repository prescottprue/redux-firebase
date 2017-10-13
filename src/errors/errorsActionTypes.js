import { actionsPrefix } from '../constants';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} LOGIN_ERROR - `@@reduxFirebase/LOGIN_ERROR`
 * @property {String} UNAUTHORIZED_ERROR - `@@reduxFirebase/UNAUTHORIZED_ERROR`
 * @example
 * import { errorsActionTypes } from 'redux-firebase/errors'
 * errorsActionTypes.SET === '@@reduxFirebase/SET' // true
*/
const authActionTypes = {
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  UNAUTHORIZED_ERROR: `${actionsPrefix}/UNAUTHORIZED_ERROR`,
};

export default authActionTypes;
