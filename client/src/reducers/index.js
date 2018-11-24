import { combineReducers } from 'redux';
import apiUrlReducer from './apiUrlReducer';
import contactsReducer from './contactsReducer';
import otpsReducer from './otpsReducer';
import messageReducer from './messageReducer';
import commonReducer from './commonReducer';

export default combineReducers({
  apiUrl : apiUrlReducer,
  contacts : contactsReducer,
  otps : otpsReducer,
  message : messageReducer,
  common : commonReducer
});
