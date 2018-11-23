import { combineReducers } from 'redux';
import apiUrlReducer from './apiUrlReducer';
import contactsReducer from './contactsReducer';
import otpsReducer from './otpsReducer';


export default combineReducers({
  apiUrl : apiUrlReducer,
  contacts : contactsReducer,
  otps : otpsReducer
});
