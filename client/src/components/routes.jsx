import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import { setApiUrl } from '../actions/apiUrlActions';
import Contacts from './contacts';
import ContactDetails from './contactDetails';
import SendOtp from './sendOtp';
import Otps from './otps';

class Routes extends Component{

  componentWillMount(){
    this.props.setApiUrl(process.env.REACT_APP_SERVER_API_URL);
  }

  componentDidUpdate(prevProps, prevState){

  }


  getAllData = () => {

  }



  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Contacts} />
          <Route path='/contacts' exact component={Contacts} />
          <Route path='/contact/:contactID' exact component={ContactDetails} />
          <Route path='/sendotp/:contactID' exact component={SendOtp} />
          <Route path='/otps' exact component={Otps} />
          <Route component={Contacts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ apiUrl }) => ({
  apiUrl : apiUrl.value
});

export default connect(mapStateToProps, { setApiUrl })(Routes);
