import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class OtpElement extends Component{
  render(){
    if(Object.values(this.props.contacts).length === 0){
      return (
        <Redirect to="/contacts" />
      );
    }else{
      const { contactID, sentOn, body } = this.props.otp;
      const { phoneNumber } = this.props.contacts[contactID];
      const sentOnDate = new Date(sentOn)
      const sentOnDateArr = sentOnDate.toString().split(" ")
      const timeString = sentOnDateArr[4] + " " + sentOnDateArr[1] + " " + sentOnDateArr[2] + " " + sentOnDateArr[3];
      return(
        <Fragment>
          <div className="row">
            <div className="col-md-4"><h5><b>{timeString}</b></h5></div>
            <div className="col-md-1"></div>
            <div className="col-md-3"><h5><b>{phoneNumber}</b></h5></div>
            <div className="col-md-1"></div>
            <div className="col-md-3"><h5><b>{body}</b></h5></div>
          </div>
          <hr className="my-2"/>
        </Fragment>
      );
    }
  }
}

OtpElement.propTypes = {
  contacts : propTypes.object.isRequired,
  otp : propTypes.object.isRequired
};

const mapStateToProps = ({ contacts }) => ({
  contacts : contacts
});

export default connect(mapStateToProps, {  })(OtpElement);
