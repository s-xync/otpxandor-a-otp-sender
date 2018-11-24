import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import propTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class ContactDetails extends Component{
  render(){
    if(Object.values(this.props.contacts).length === 0){
      return (
        <Redirect to="/contacts" />
      );
    }else{
      const { contactID } = this.props.match.params;
      const { firstName, lastName, phoneNumber } = this.props.contacts[contactID];
      return(
        <Fragment>
          <NavBar />
          <div className="container text-center">
            <div className="jumbotron" style={{margin:"10%"}}>
              <h1>{"Name : " + firstName + " " + lastName}</h1>
              <p className="lead">{"Phone Number : " + phoneNumber}</p>
              <Link to={"/sendotp/" + contactID}><button type="button" className="btn btn-outline-primary btn-lg">Send OTP</button></Link>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

ContactDetails.propTypes = {
  match : propTypes.object.isRequired,
  contacts : propTypes.object.isRequired
};

const mapStateToProps = ({ contacts }) => ({
  contacts : contacts
});


export default connect(mapStateToProps, {  })(ContactDetails);
