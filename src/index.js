import { createFirebaseInstance } from './createFirebaseInstance';
import enhancer, { getFirebase } from './enhancer';
import reducer from './reducer';
import constants, { actionTypes } from './constants';
import { authIsReady } from './utils/auth';
import * as helpers from './helpers';

export default {
  createFirebaseInstance,
  firebaseStateReducer: reducer,
  reduxReactFirebase: enhancer,
  reactReduxFirebase: enhancer,
  reduxFirebase: enhancer,
  constants,
  actionTypes,
  getFirebase,
  authIsReady,
  helpers,
  ...helpers,
};
