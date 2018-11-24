import { SET_GET_ALL_DATA_FLAG } from '../actions/types';

const initialState = {
  getAllDataFlag : false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GET_ALL_DATA_FLAG:{
      return {
        ...state,
        getAllDataFlag : action.payload
      };
    }
    default:{
      return state;
    }
  }
};
