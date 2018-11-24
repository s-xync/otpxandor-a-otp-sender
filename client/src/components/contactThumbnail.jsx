import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactThumbnail extends Component{
  render(){
    const { contactID } = this.props;
    const { firstName, lastName } = this.props.contacts[contactID];
    return(
      <Fragment>
        <div className="card col-md-4" style={{padding:"0.5%"}}>
          <div className="card-body">
            <h5 className="card-title">{firstName + " " + lastName}</h5>
            <Link to={"/contact/" + contactID} className="card-link">Full Details</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

ContactThumbnail.propTypes = {
  contactID : propTypes.string.isRequired,
  contacts : propTypes.object.isRequired
};

const mapStateToProps = ({ contacts }) => ({
  contacts : contacts
});

export default connect(mapStateToProps, {  })(ContactThumbnail);
