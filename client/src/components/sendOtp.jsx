import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import NavBar from './navBar';
import { resetStateOfMessageBody, setMessageBody } from '../actions/messageActions';

class SendOtp extends Component{
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
          <NavBar />
          <div className="container text-center">
            <div className="jumbotron" style={{margin:"10%"}}>
              <h1>{"Send OTP to " + phoneNumber}</h1>
              <hr className="my-4"/>
              <form>
                <div className="form-group">
                  <label htmlFor="bodyMessage" className="lead">Message Body</label>
                  <textarea type="text" className="form-control" id="bodyMessage" aria-describedby="bodyMessageHelp" placeholder="Hi. Your OTP is : 123456" value={this.props.bodyMessage} onChange={this.props.setMessageBody} required></textarea>
                  <small id="bodyMessageHelp" className={"form-text " + this.props.bodyMessageHelpClass}>{this.props.bodyMessageHelp}</small>
                </div>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={!(this.props.bodyMessageFlag)} onClick={this.handleMessageSubmit}>Send OTP</button>
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
  contacts : propTypes.object.isRequired
};

const mapStateToProps = ({ contacts, message }) => ({
  contacts : contacts,
  bodyMessage : message.bodyMessage,
  bodyMessageHelp : message.bodyMessageHelp,
  bodyMessageHelpClass : message.bodyMessageHelpClass,
  bodyMessageFlag : message.bodyMessageFlag
});


export default connect(mapStateToProps, { resetStateOfMessageBody, setMessageBody })(SendOtp);
