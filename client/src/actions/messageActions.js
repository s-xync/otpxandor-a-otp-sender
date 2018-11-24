import { RESET_STATE_OF_MESSAGE_BODY, SET_MESSAGE_BODY, SET_SEND_OTP_DONE } from './types';

export const resetStateOfMessageBody = () => (dispatch) => {
  dispatch({
    type : RESET_STATE_OF_MESSAGE_BODY,
    payload : null
  });
};

export const setMessageBody = (value) => (dispatch) => {
  if(value.length > 0){
    const valueArr = value.split(" ");
    if(valueArr.length === 6){
      if(valueArr[0] === "Hi." && valueArr[1] === "Your" && valueArr[2] === "OTP" && valueArr[3] === "is" && valueArr[4] === ":"){
        if(!isNaN(valueArr[5]) && valueArr[5].length === 6){
          dispatch({
            type : SET_MESSAGE_BODY,
            payload : {
              bodyMessage : value,
              bodyMessageHelp : "Validated",
              bodyMessageHelpClass : "text-success",
              bodyMessageFlag : true
            }
          });
        }else{
          dispatch({
            type : SET_MESSAGE_BODY,
            payload : {
              bodyMessage : value,
              bodyMessageHelp : "OTP has to be a six-digit number",
              bodyMessageHelpClass : "text-danger",
              bodyMessageFlag : false
            }
          });
        }
      }else{
        dispatch({
          type : SET_MESSAGE_BODY,
          payload : {
            bodyMessage : value,
            bodyMessageHelp : "Format --> Hi. Your OTP is : <OTP>",
            bodyMessageHelpClass : "text-danger",
            bodyMessageFlag : false
          }
        });
      }
    }else{
      dispatch({
        type : SET_MESSAGE_BODY,
        payload : {
          bodyMessage : value,
          bodyMessageHelp : "Format --> Hi. Your OTP is : <OTP>",
          bodyMessageHelpClass : "text-danger",
          bodyMessageFlag : false
        }
      });
    }
  }else{
    dispatch({
      type : SET_MESSAGE_BODY,
      payload : {
        bodyMessage : value,
        bodyMessageHelp : "Message cannot be empty",
        bodyMessageHelpClass : "text-danger",
        bodyMessageFlag : false
      }
    });
  }
};

export const setSendOtpDone = () => (dispatch) => {
  dispatch({
    type : SET_SEND_OTP_DONE,
    payload : null
  });
};
