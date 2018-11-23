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

apiRouter.get('/otps',
(req, res) => {
  const query = {
    isDeleted : false
  };
  const sortCondition = {
    sentOn : -1 //descending order
  }
  Otp.find(query, { sort : sortCondition }, (err, otps) => {
    if(err){
      return res.json({
        success : false,
        message : "Internal server error"
      });
    }else{
      let otpsArr = [];
      otps.forEach((otp) => {
        const { _id, contactID, body, sentOn } = otp;
        const id = _id;
        otpsArr.push({ id, contactID, body, sentOn });
      })
      return res.json({
        success : true,
        message : "Otps retrieved successfully",
        otps : otpsArr
      });
    }
  });
});


module.exports = apiRouter;
