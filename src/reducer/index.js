import { combineReducers } from 'redux';
import specs from './specs';
import error from './error';

const rootReducer = combineReducers({
  specs,
  error
});

export default rootReducer;
