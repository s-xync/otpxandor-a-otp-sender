import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import NavBar from './navBar';
import ContactThumbnail from './contactThumbnail';

class Contacts extends Component{
  render(){
    return(
      <Fragment>
        <NavBar />
        <div className="container">
          <br/>
          <h1 style={{textAlign : "center"}}>All Contacts</h1>
          <br/>
          <div className="row">
            {this.props.contactsArr.map((contact) => <ContactThumbnail key={contact.id} contactID={contact.id}/>)}
          </div>
          <br/>
        </div>
      </Fragment>
    );
  }
}

Contacts.propTypes = {
  contactsArr : propTypes.array.isRequired
}

const mapStateToProps = ({ contacts }) => ({
  contactsArr : Object.values(contacts)
});

export default connect(mapStateToProps, {  })(Contacts);
