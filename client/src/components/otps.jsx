import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavBar from './navBar';
import OtpElement from './otpElement';

class Otps extends Component{
  render(){
    return(
      <Fragment>
        <NavBar />
        <div className="container">
          <br/>
          <h1 style={{textAlign : "center"}}>All OTPS</h1>
          <br/>
          <div className="jumbotron text-center" style={{paddingTop:"32px", paddingBottom:"32px"}}>
            <hr className="my-2"/>
            <div className="row">
              <div className="col-md-4"><h4><b>Time Sent</b></h4></div>
              <div className="col-md-1"></div>
              <div className="col-md-3"><h4><b>To Number</b></h4></div>
              <div className="col-md-1"></div>
              <div className="col-md-3"><h4><b>OTP</b></h4></div>
            </div>
            <hr className="my-2"/>
            <div>
              {this.props.otpsArr.map((otp)=>
                <OtpElement key={otp.id} otp={otp} />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Otps.propTypes = {
  otpsArr : propTypes.array.isRequired
}

const mapStateToProps = ({ otps }) => ({
  otpsArr : otps
});

export default connect(mapStateToProps, {  })(Otps);
