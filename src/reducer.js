import { authReducer } from './auth';
import { errorsReducer } from './errors';
import { listenersReducer } from './listeners';
import { profileReducer } from './profile';
import { rtdbReducer } from './rtdb'

/**
 * @name firebaseStateReducer
 * @description Reducer for react redux firebase. This function is called
 * automatically by redux every time an action is fired. Based on which action
 * is called and its payload, the reducer will update redux state with relevant
 * changes.
 * @param {Object} state - Current Redux State
 * @param {Object} action - Action which will modify state
 * @param {String} action.type - Type of Action being called
 * @param  {String} action.path - Path of action that was dispatched
 * @param {String} action.data - Data associated with action
 * @return {Object} Firebase redux state
 */
export default combineReducers({
  requesting: requestingReducer,
  requested: requestedReducer,
  timestamps: timestampsReducer,
  data: dataReducer,
  ordered: orderedReducer,
  auth: authReducer,
  authError: authErrorReducer,
  profile: profileReducer,
  listeners: listenersReducer,
  isInitializing: isInitializingReducer,
  errors: errorsReducer,
});
