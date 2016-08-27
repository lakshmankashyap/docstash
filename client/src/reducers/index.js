import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import pendingTasks from './ajaxStatusReducer';
import authReducer from './authReducer';
import notification from './notification';
import user from './userReducer';
import shortnerReducer from './shortnerReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
  pendingTasks,
  notification: notification,
  user: user,
  shortner: shortnerReducer
});

export default rootReducer;
