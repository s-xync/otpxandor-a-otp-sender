const express = require('express');
const twilio = require('twilio');
const dotenv = require('dotenv');

const Contact = require('../models/contact.js');
const Otp = require('../models/otp.js');

dotenv.config();

twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const apiRouter = express.Router();

/*

*  GET contacts

*  GET otps

*  POST sendotp

*/


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
        message : "OTPs retrieved successfully",
        otps : otpsArr
      });
    }
  });
});

apiRouter.post('/sendotp',
(req, res) => {
  const { contactID, phoneNumber, otp } = req.body;
  //otp has to be of length 6 and has to be a number
  if(otp.length === 6 && !isNaN(otp)){
    const newOtp = {
      body : otp,
      contactID : contactID
    };
    twilioClient.messages.create({
      from : "whatsapp:" + process.env.TWILIO_WHATSAPP_NUMBER,
      to : "whatsapp:" + phoneNumber,
      body : "Hi. Your OTP is: " + otp
    }).then((message) => {
      Otp.create(newOtp, (err, otp) => {
        if(err){
          return res.json({
            success : false,
            message : "Internal server error"
          });
        }else{
          return res.json({
            success : true,
            message : "OTP sent successfully"
          });
        }
      });
    }).catch((err) => {
      console.log(err);
      return res.json({
        success : false,
        message : "Internal server error"
      });
    });
  }else{
    return res.json({
      success : false,
      message : "OTP should be a six digit number"
    });
  }
});

module.exports = apiRouter;
