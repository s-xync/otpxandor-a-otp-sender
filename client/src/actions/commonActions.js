import { SET_GET_ALL_DATA_FLAG } from './types';

export const setGetAllDataFlag = (flag) => (dispatch) => {
  dispatch({
    type : SET_GET_ALL_DATA_FLAG,
    payload : flag
  });
};
