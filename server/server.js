const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const setupDatabase = require('./staticDatabase/setupDatabase');

app = express();

dotenv.config(); //makes the VARIABLE in .env file available here as process.env.VARIABLE

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/otpxandor';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{ useCreateIndex: true, useNewUrlParser: true });

// setup static data in the database
setupDatabase();

// cors middleware
const corsOptions = {
  origin : process.env.CORS_ORIGIN
};
app.use(cors(corsOptions));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// Logs all requests to the console
app.use((req,res,next) => {
  console.log(new Date(), req.method, req.url);
  next();
});

// routes to apis
app.use('/api', api);

// listen
app.set('port', PORT);
process.title = 'otpxandor';
app.listen(app.get('port'), () => {
  console.log('********************************************************************');
  console.log('Server started on port ' + app.get('port'));
  console.log('This process is your pid ' + process.pid);
  console.log('This process is your process name ' + process.title);
  console.log('********************************************************************');
});

// if not any of the above end points
app.get('*', (req,res) => {
  res.status(404).json({
    success : false,
    message : "Error : Invalid end-point"
  });
});

app.post('*', (req,res) => {
  res.status(405).json({
    success : false,
    message : "Error : Invalid end-point"
  });
});

app.put('*', (req,res) => {
  res.status(405).json({
    success : false,
    message : "Error : Invalid end-point"
  });
});

app.delete('*', (req,res) => {
  res.status(405).json({
    success : false,
    message : "Error : Invalid end-point"
  });
});
