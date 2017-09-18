import enhancer, { getFirebase } from './enhancer'
import reducer from './reducer'
import constants, { actionTypes } from './constants'
// import * as helpers from './helpers'

export default {
  firebaseStateReducer: reducer,
  firebaseReducer: reducer,
  reducer,
  reduxFirebase: enhancer,
  enhancer,
  constants,
  actionTypes,
  getFirebase
  // ...helpers
}
