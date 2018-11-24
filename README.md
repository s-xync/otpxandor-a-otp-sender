# XANDOR - An OTP Sender  

First of all, make sure you have `nodejs`, `mongodb` installed on you system.  
First install `yarn` globally using `sudo npm install -g yarn`. We will use `yarn` instead of `npm`.  

To make the mongodb server online, use `sudo service mongod start`.  

Now, clone the whole repository onto the local machine. Create a `.env` file in both `server` and `client` directories.  

Go to [twilio](www.twilio.com) and use your account sid and token down below in .env of server.   

##### .env in server directory  
`PORT=8080`  
`CORS_ORIGIN=http://localhost:3000`  
`MONGODB_URI=mongodb://127.0.0.1:27017/otpxandor`  
`TWILIO_ACCOUNT_SID=<TWILIO_ACCOUNT_SID>`  
`TWILIO_AUTH_TOKEN=<TWILIO_AUTH_TOKEN>`  
`TWILIO_WHATSAPP_NUMBER=<TWILIO_WHATSAPP_NUMBER>`  
#### .env in client directory  
`REACT_APP_SERVER_API_URL=http://localhost:8080`  
Go to `setupDatabase.js` located in `server/staticDatabase` and change the line `const contactsData = require('./another_database.json')` with `const contactsData = require('./database.json');` since I have not pushed the `another_database.json` file to github.  

Run `yarn install` and `yarn start` in `server` directory.  
Run `yarn install` and `yarn start` in `client` directory.  

If you don't have any errors, you are good to go.

Thanks!
