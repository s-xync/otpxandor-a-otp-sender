import { RESET_STATE_OF_MESSAGE_BODY, SET_MESSAGE_BODY, SET_SEND_OTP_DONE } from '../actions/types';

const initialState = {
  bodyMessage : "",
  bodyMessageHelp : "",
  bodyMessageHelpClass : "",
  bodyMessageFlag : false,
  sendOtpDone : false
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
    case SET_SEND_OTP_DONE:{
      return {
        ...state,
        sendOtpDone : true
      };
    }
    default:{
      return state;
    }

  }
};
