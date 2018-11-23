const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  phoneNumber : {
    type : String,
    required : true,
    unique : true
  },
  createdOn : {
    type : Date,
    default : Date.now(),
    required : true
  },
  isDeleted : {
    type : Boolean,
    default : false,
    required : true
  }
});

const Contact = module.exports = mongoose.model('Contact', contactSchema);
