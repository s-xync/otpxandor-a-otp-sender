import { combineReducers } from 'redux';
import apiUrlReducer from './apiUrlReducer';

export default combineReducers({
  apiUrl : apiUrlReducer
});
