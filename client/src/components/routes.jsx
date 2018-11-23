import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import { setApiUrl } from '../actions/apiUrlActions';
import { setContactsDetails } from '../actions/contactsActions';
import { setOtpsDetails } from '../actions/otpsActions';
import Contacts from './contacts';
import ContactDetails from './contactDetails';
import SendOtp from './sendOtp';
import Otps from './otps';

class Routes extends Component{

  componentWillMount(){
    this.props.setApiUrl(process.env.REACT_APP_SERVER_API_URL);
  }

  componentDidUpdate(prevProps, prevState){
    if((prevProps.apiUrl !== this.props.apiUrl) && this.props.apiUrl){
      this.getAllData();
    }
  }


  getAllData = () => {
    if(this.props.apiUrl){
      axios.get(this.props.apiUrl + '/api/contacts').then((response) => {
        if(response.data.success){
          this.props.setContactsDetails(response.data.contacts);
          axios.get(this.props.apiUrl + '/api/otps').then((response) => {
            if(response.data.success){
              this.props.setOtpsDetails(response.data.otps);
            }else{
              console.log("Server error");
            }
          });
        }else{
          console.log("Server error");
        }
      });
    }
  };



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

Routes.propTypes = {
  apiUrl : propTypes.string.isRequired,
  setApiUrl : propTypes.func.isRequired,
  setContactsDetails : propTypes.func.isRequired,
  setOtpsDetails : propTypes.func.isRequired
};

const mapStateToProps = ({ apiUrl }) => ({
  apiUrl : apiUrl.value
});

export default connect(mapStateToProps, { setApiUrl, setContactsDetails, setOtpsDetails })(Routes);
