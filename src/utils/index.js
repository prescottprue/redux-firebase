import { isFunction } from 'lodash';

export { getEventsFromInput } from './events';

/**
 * @private
 * @description Create a function if not already one
 * @param {Function|Object|Array|String} Callable function or value of return for new function
 */
export const createCallable = f => (isFunction(f) ? f : () => f);

/**
 * Create a path array from path string
 * @param  {String} path - Path seperated with slashes
 * @return {Array} Path as Array
 * @private
 */
export const pathToArr = path => (path ? path.split(/\//).filter(p => !!p) : []);


/**
 * Trim leading slash from path for use with state
 * @param  {String} path - Path seperated with slashes
 * @return {String} Path seperated with slashes
 * @private
 */
export const getSlashStrPath = path => pathToArr(path).join('/');

/**
 * Convert path with slashes to dot seperated path (for use with lodash get/set)
 * @param  {String} path - Path seperated with slashes
 * @return {String} Path seperated with dots
 * @private
 */
export const getDotStrPath = path => pathToArr(path).join('.');

export default { createCallable, pathToArr, getSlashStrPath, getDotStrPath };
