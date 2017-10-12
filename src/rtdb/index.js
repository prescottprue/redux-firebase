import listenersReducer from './listenersReducer';
import requestedReducer from './requestedReducer';
import requestingReducer from './requestingReducer';
import rtdbActions from './rtdbActions';
import rtdbActionTypes from './rtdbActionTypes';
import timestampsReducer from './timestampsReducer';
import rtdbReducers from './rtdbReducers';

export {
  listenersReducer,
  requestedReducer,
  requestingReducer,
  timestampsReducer,
  rtdbActions,
  rtdbActionTypes,
  rtdbReducers,
};

export default {
  listenersReducer,
  requestedReducer,
  requestingReducer,
  timestampsReducer,
  rtdbActions,
  rtdbActionTypes,
  rtdbReducers,
  ...rtdbReducers,
};
