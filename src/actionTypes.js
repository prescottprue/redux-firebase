import { authActionTypes } from './auth';
import { errorsActionTypes } from './errors';
import { profileActionTypes } from './profile';
import { rtdbActionTypes } from './rtdb';

const actionTypes = {
  ...authActionTypes,
  ...errorsActionTypes,
  ...profileActionTypes,
  ...rtdbActionTypes,
};

export default {
  rtdbActionTypes,
  authActionTypes,
  actionTypes,
  ...actionTypes,
};
