require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const { StyleSheetPage } = require('twilio/lib/rest/autopilot/v1/assistant/styleSheet');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const cron = require('node-cron');
//const moment = require('moment');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);


/* "10 * * * *"
var today = new Date();
  var time = today.getMinutes() + 2 + today.getHours() + "* * *" ;
  console.log(time)

const moment = require('moment');
  const today = new Date();
  function formatDate(today) {
    return `${today.getMinutes() + 1} ${today.getHours()} * * *`;
  }
sendtest1 = cron.schedule(`*2 * * * *`, function() {

*/
  
  app.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  
 
    console.log("running every 1 minute");
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body,
      //sendAt: sendWhen.toISOString(),
      //scheduleType: 'fixed'
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
      
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });

});




    






//sendScheduledSMS();




  







app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
