import { SET_OTPS_DETAILS } from './types';

export const setOtpsDetails = (otpsArr) => (dispatch) => {
  dispatch({
    type : SET_OTPS_DETAILS,
    payload : [
      ...otpsArr
    ]
  });
};
