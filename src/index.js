import middleware from './middleware'
import enhancer, { getFirebase } from './enhancer'
import reducer from './reducer'
import constants, { actionTypes } from './constants'
// import * as helpers from './helpers'

export default {
  firebaseStateReducer: reducer,
  reducer,
  reduxFirebase: enhancer,
  enhancer,
  reduxFirebaseMiddleware: middleware,
  middleware,
  constants,
  actionTypes,
  getFirebase
  // ...helpers
}
