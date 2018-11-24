import { RESET_STATE_OF_MESSAGE_BODY, SET_MESSAGE_BODY } from '../actions/types';

const initialState = {
  bodyMessage : "",
  bodyMessageHelp : "",
  bodyMessageHelpClass : "",
  bodyMessageFlag : false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE_OF_MESSAGE_BODY:{
      return initialState;
    }
    case SET_MESSAGE_BODY:{
      const { bodyMessage, bodyMessageHelp, bodyMessageHelpClass, bodyMessageFlag } = action.payload;
      return {
        ...state,
        bodyMessage,
        bodyMessageHelp,
        bodyMessageHelpClass,
        bodyMessageFlag
      };
    }
    default:{
      return state;
    }

  }
};
