import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './contacts';
import ContactDetails from './contactDetails';
import SendOtp from './sendOtp';
import Otps from './otps';

class Routes extends Component{
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

export default Routes;
