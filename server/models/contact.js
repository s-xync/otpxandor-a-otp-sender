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
  isDeleted : {
    type : Boolean,
    default : false,
    required : true
  },
},
{
  timestamps : true
});

const Contact = module.exports = mongoose.model('Contact', contactSchema);
