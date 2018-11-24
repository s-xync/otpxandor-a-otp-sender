import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import NavBar from './navBar';
import { resetStateOfMessageBody, setMessageBody } from '../actions/messageActions';
import { setGetAllDataFlag } from '../actions/commonActions';

class SendOtp extends Component{

  componentWillMount(){
    this.props.resetStateOfMessageBody();
  }

  componentDidMount(){
    this.setInitialRandomOtp();
  }

  setInitialRandomOtp = () => {
    let initialMessage = "Hi. Your OTP is : ";
    const randomNumber = Math.floor(100000 + Math.random() * 899999);
    initialMessage += randomNumber.toString();
    this.props.setMessageBody(initialMessage);
  }

  handleSetMessageBody = (event) => {
    this.props.setMessageBody(event.target.value);
  }

  handleMessageSubmit = (event, contactID, phoneNumber) => {
    event.preventDefault();
    const { apiUrl, bodyMessage, bodyMessageFlag } = this.props;
    if(bodyMessageFlag){
      axios.post(apiUrl + '/api/sendotp', {
        contactID : contactID,
        phoneNumber : phoneNumber,
        otp : bodyMessage.split(" ")[5]
      }).then((response) => {
        if(response.data.success){
          this.props.setGetAllDataFlag(true);
        }else{
          console.log(response.log.message);
        }
      });
    }
  }

  renderRedirectSendOtpDone = () => {
    if(this.props.getAllDataFlag){
      return (
        <Redirect to="/contacts" />
      );
    }
  }
  render(){
    if(Object.values(this.props.contacts).length === 0){
      return (
        <Redirect to="/contacts" />
      );
    }else{
      const { contactID } = this.props.match.params;
      const { phoneNumber } = this.props.contacts[contactID];
      return(
        <Fragment>
          { this.renderRedirectSendOtpDone() }
          <NavBar />
          <div className="container text-center">
            <div className="jumbotron" style={{margin:"10%"}}>
              <h1>{"Send OTP to " + phoneNumber}</h1>
              <hr className="my-4"/>
              <form>
                <div className="form-group">
                  <label htmlFor="bodyMessage" className="lead">Message Body</label>
                  <textarea type="text" className="form-control" id="bodyMessage" aria-describedby="bodyMessageHelp" placeholder="Hi. Your OTP is : 123456" value={this.props.bodyMessage} onChange={this.handleSetMessageBody} required></textarea>
                  <small id="bodyMessageHelp" className={"form-text " + this.props.bodyMessageHelpClass}>{this.props.bodyMessageHelp}</small>
                </div>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={!(this.props.bodyMessageFlag)} onClick={(event) => this.handleMessageSubmit(event, contactID, phoneNumber)}>Send OTP</button>
                <br/>
              </form>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

SendOtp.propTypes = {
  match : propTypes.object.isRequired,
  apiUrl : propTypes.string.isRequired,
  contacts : propTypes.object.isRequired,
  bodyMessage : propTypes.string.isRequired,
  bodyMessageHelp : propTypes.string.isRequired,
  bodyMessageHelpClass : propTypes.string.isRequired,
  bodyMessageFlag : propTypes.bool.isRequired,
  resetStateOfMessageBody : propTypes.func.isRequired,
  setMessageBody : propTypes.func.isRequired,
  setGetAllDataFlag : propTypes.func.isRequired,
  getAllDataFlag : propTypes.bool.isRequired
};

const mapStateToProps = ({ apiUrl, contacts, message, common }) => ({
  apiUrl : apiUrl.value,
  contacts : contacts,
  bodyMessage : message.bodyMessage,
  bodyMessageHelp : message.bodyMessageHelp,
  bodyMessageHelpClass : message.bodyMessageHelpClass,
  bodyMessageFlag : message.bodyMessageFlag,
  getAllDataFlag : common.getAllDataFlag
});


export default connect(mapStateToProps, { resetStateOfMessageBody, setMessageBody, setGetAllDataFlag })(SendOtp);
