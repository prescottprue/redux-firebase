import { actionsPrefix } from '../constants';

/**
 * @constant
 * @type {Object}
 * @description Object containing all action types
 * @property {String} LOGIN - `@@reduxFirebase/LOGIN`
 * @property {String} LOGOUT - `@@reduxFirebase/LOGOUT`
 * @property {String} LOGIN_ERROR - `@@reduxFirebase/LOGIN_ERROR`
 * @property {String} UNAUTHORIZED_ERROR - `@@reduxFirebase/UNAUTHORIZED_ERROR`
 * @property {String} AUTHENTICATION_INIT_STARTED - `@@reduxFirebase/AUTHENTICATION_INIT_STARTED`
 * @property {String} AUTHENTICATION_INIT_FINISHED - `@@reduxFirebase/AUTHENTICATION_INIT_FINISHED`
 * @property {String} SESSION_START - `@@reduxFirebase/SESSION_START`
 * @property {String} SESSION_END - `@@reduxFirebase/SESSION_END`
 * @property {String} AUTH_UPDATE_START - `@@reduxFirebase/AUTH_UPDATE_START`
 * @property {String} AUTH_UPDATE_ERROR - `@@reduxFirebase/AUTH_UPDATE_ERROR`
 * @property {String} AUTH_UPDATE_SUCCESS - `@@reduxFirebase/AUTH_UPDATE_SUCCESS`
 * @property {String} AUTH_RELOAD_START - `@@reduxFirebase/AUTH_RELOAD_START`
 * @property {String} AUTH_RELOAD_ERROR - `@@reduxFirebase/AUTH_RELOAD_ERROR`
 * @property {String} AUTH_RELOAD_SUCCESS - `@@reduxFirebase/AUTH_RELOAD_SUCCESS`
 * @property {String} AUTH_LINK_START - `@@reduxFirebase/AUTH_LINK_START`
 * @property {String} AUTH_LINK_ERROR - `@@reduxFirebase/AUTH_LINK_ERROR`
 * @property {String} AUTH_LINK_SUCCESS - `@@reduxFirebase/AUTH_LINK_SUCCESS`
 * @property {String} AUTH_EMPTY_CHANGE - `@@reduxFirebase/AUTH_LINK_SUCCESS`
 * @example
 * import { actionTypes } from 'redux-firebase/actionTypes'
 * actionTypes.SET === '@@reduxFirebase/SET' // true
*/
export const authActionTypes = {
  LOGIN: `${actionsPrefix}/LOGIN`,
  LOGOUT: `${actionsPrefix}/LOGOUT`,
  LOGIN_ERROR: `${actionsPrefix}/LOGIN_ERROR`,
  UNAUTHORIZED_ERROR: `${actionsPrefix}/UNAUTHORIZED_ERROR`,
  AUTHENTICATION_INIT_STARTED: `${actionsPrefix}/AUTHENTICATION_INIT_STARTED`,
  AUTHENTICATION_INIT_FINISHED: `${actionsPrefix}/AUTHENTICATION_INIT_FINISHED`,
  AUTH_UPDATE_START: `${actionsPrefix}/AUTH_UPDATE_START`,
  AUTH_UPDATE_SUCCESS: `${actionsPrefix}/AUTH_UPDATE_SUCCESS`,
  AUTH_UPDATE_ERROR: `${actionsPrefix}/AUTH_UPDATE_ERROR`,
  AUTH_RELOAD_START: `${actionsPrefix}/AUTH_RELOAD_START`,
  AUTH_RELOAD_ERROR: `${actionsPrefix}/AUTH_RELOAD_ERROR`,
  AUTH_RELOAD_SUCCESS: `${actionsPrefix}/AUTH_RELOAD_SUCCESS`,
  AUTH_LINK_START: `${actionsPrefix}/AUTH_LINK_START`,
  AUTH_LINK_ERROR: `${actionsPrefix}/AUTH_LINK_ERROR`,
  AUTH_LINK_SUCCESS: `${actionsPrefix}/AUTH_LINK_SUCCESS`,
  AUTH_EMPTY_CHANGE: `${actionsPrefix}/AUTH_EMPTY_CHANGE`,
};

export default authActionTypes;
