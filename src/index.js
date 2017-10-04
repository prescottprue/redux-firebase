import enhancer, { getFirebase } from './enhancer';
import reducer from './reducer';
import { CALL_FIREBASE } from './middleware';
import constants, { actionTypes } from './constants';
// import * as helpers from './helpers'

export default {
  firebaseStateReducer: reducer,
  firebaseReducer: reducer,
  reducer,
  CALL_FIREBASE,
  reduxFirebase: enhancer,
  enhancer,
  constants,
  actionTypes,
  getFirebase,
  // ...helpers
};
