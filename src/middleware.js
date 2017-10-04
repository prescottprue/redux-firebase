import { isArray, isFunction } from 'lodash';
import { InternalError } from './errors';

// Fetches an Firebase response
// This makes every API response have the same shape, regardless of how nested it was.
function callFirebase(firebaseInstance, callInfoObj) {
  // console.log('calling devshare:', callInfoObj, Devshare)
  const { method, namespace } = callInfoObj;
  let { modelArgs, methodArgs } = callInfoObj;

  // Wrap args in array if not already
  if (!isArray(modelArgs)) modelArgs = [modelArgs];
  if (!isArray(methodArgs)) methodArgs = [methodArgs];

  if (!namespace && firebaseInstance.database) {
    // Make firebase method call with array of params
    return !methodArgs
    ? firebaseInstance.database()[method]
    : firebaseInstance.database()[method]
      .apply(this, methodArgs);
  }
  const fbNamespace = firebaseInstance[namespace];
  if (!fbNamespace || !isFunction(fbNamespace)) {
    throw new Error('Invalid namespace. Must be firestore, database, messaging, auth, or storage');
  }
  // Make devshare method call with array of params
  return !methodArgs
  ? fbNamespace()[method]
  : fbNamespace()[method]
    .apply(this, methodArgs);
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_FIREBASE = Symbol('Call Firebase');

/**
 * Evaluate a type descriptor to an FSA
 *
 * @function actionWith
 * @access private
 * @param {object} descriptor - A type descriptor
 * @param {array} args - The array of arguments for `payload` and `meta` function properties
 * @returns {object}
 */
async function actionWith(descriptor, args) {
  const newDescriptor = {};
  try {
    newDescriptor.payload = await (
      typeof newDescriptor.payload === 'function' ?
      newDescriptor.payload(...args) :
      newDescriptor.payload
    );
  } catch (e) {
    newDescriptor.payload = new InternalError(e.message);
    newDescriptor.error = true;
  }

  try {
    newDescriptor.meta = await (
      typeof newDescriptor.meta === 'function' ?
      newDescriptor.meta(...args) :
      newDescriptor.meta
    );
  } catch (e) {
    delete newDescriptor.meta;
    newDescriptor.payload = new InternalError(e.message);
    newDescriptor.error = true;
  }

  return newDescriptor;
}

// A Redux middleware that interprets actions with CALL_FIREBASE info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => async (action) => {
  const callAPI = action[CALL_FIREBASE];
  if (typeof callAPI === 'undefined') return next(action);

  let { method } = callAPI;

  if (typeof method === 'function') method = method(store.getState());

  if (typeof method !== 'string') throw new Error('Specify a method.');

  const { args } = callAPI;
  const types = [
    'CALL_FIREBASE_REQUEST',
    'CALL_FIREBASE_SUCCESS',
    'CALL_FIREBASE_ERROR',
  ];
  // if (!Array.isArray(types) || types.length !== 3) {
  //   throw new Error('Expected an array of three action types.');
  // }
  //
  // if (!types.every(type => typeof type === 'string')) {
  //   throw new Error('Expected action types to be strings.');
  // }


  const [requestType, successType, failureType] = types;
  next(await actionWith({ type: requestType }, [action, store.getState()]));
  const callInfoObj = { method };
  return callFirebase(store.firebase, callInfoObj)
    .then((response) => {
      if (response && !response.forEach) {
        return next(actionWith({ response, method, args, type: successType }));
      }
      const data = [];
      response.forEach((doc) => {
        data.push({ key: doc.id, value: doc.data() });
      });
      return next(actionWith({ response, method, args, type: successType, data }));
    })
    .catch(error =>
      next(actionWith({
        type: failureType,
        error: error.message || error || 'Something bad happened',
      })),
    );
};
