const express = require('express');

const Contact = require('../models/contact.js');
const Otp = require('../models/otp.js');

const apiRouter = express.Router();

apiRouter.get('/test',
(req, res) => {
  return res.json({
    success : true,
    message : "Test successful"
  });
});

module.exports = apiRouter;
