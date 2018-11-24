import { combineReducers } from 'redux';
import apiUrlReducer from './apiUrlReducer';
import contactsReducer from './contactsReducer';
import otpsReducer from './otpsReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  apiUrl : apiUrlReducer,
  contacts : contactsReducer,
  otps : otpsReducer,
  message : messageReducer
});
