import { SET_CONTACTS_DETAILS } from './types';

export const setContactsDetails = (contactsObj) => (dispatch) => {
  dispatch({
    type : SET_CONTACTS_DETAILS,
    payload : {
      ...contactsObj
    }
  });
};
