import { isArray } from 'lodash'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callFirebase ({ firebase, model, method, methodArgs }) {
  // console.log('calling firebase:', callInfoObj, Firebase)
  // Start call chain
  let firebaseCall = firebase

  // Wrap args in array if not already
  if (!isArray(methodArgs)) methodArgs = [methodArgs]

  if (!methodArgs) {
    return firebaseCall[method]
  }
  // Make firebase method call with array of params
  return firebaseCall[method].apply(this, methodArgs)
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_FIREBASE = Symbol('Call Firebase')

// A Redux middleware that interprets actions with CALL_FIREBASE info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_FIREBASE]
  if (typeof callAPI === 'undefined') return next(action)

  let { method, methodArgs } = callAPI
  const { types } = callAPI

  if (typeof method === 'function') method = method(store.getState())

  if (typeof method !== 'string') throw new Error('Specify a method.')

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith (data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_FIREBASE]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))
  const callInfoObj = { method, methodArgs }
  return callFirebase(callInfoObj).then(
    response => next(actionWith({
      response,
      method,
      type: successType
    })), error => next(actionWith({
      type: failureType,
      error: error.message || error || 'Something bad happened'
    }))
  )
}
