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
  isDeleted : {
    type : Boolean,
    default : false,
    required : true
  }
},
{
  timestamps : {
    createdAt : 'sentOn'
  }
});

const Otp = module.exports = mongoose.model('Otp', otpSchema);
