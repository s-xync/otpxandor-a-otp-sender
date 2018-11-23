const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
  body : {
    type : String,
    required : true
  },
  contactID : {
    type : mongoose.Schema.Types.ObjectId,
    required : true
  },
  sentOn : {
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

const Otp = module.exports = mongoose.model('Otp', otpSchema);
