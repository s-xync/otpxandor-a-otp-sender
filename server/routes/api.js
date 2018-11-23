const express = require('express');

const Contact = require('../models/contact.js');
const Otp = require('../models/otp.js');

const apiRouter = express.Router();

apiRouter.get('/contacts',
(req, res) => {
  const query = {
    isDeleted : false
  };
  Contact.find(query, (err, contacts) => {
    if(err){
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      let contactsObj = {};
      contacts.forEach((contact) => {
        const { _id, firstName, lastName, phoneNumber } = contact;
        const id = _id;
        contactsObj[id] = { id, firstName, lastName, phoneNumber };
      });
      return res.json({
        success : true,
        message : "Contacts retrieved successfully",
        contacts : contactsObj
      });
    }
  });
});


module.exports = apiRouter;
