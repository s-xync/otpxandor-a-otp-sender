import { SET_CONTACTS_DETAILS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS_DETAILS:{
      return {
        ...action.payload
      };
    }
    default:{
      return state;
    }
  }
};
