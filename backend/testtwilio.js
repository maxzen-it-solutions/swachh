import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    body: "Testing Twilio OTP",
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "+919542156208" // Replace with your actual verified number
  })
  .then(message => console.log("Message sent:", message.sid))
  .catch(err => console.error("Twilio Error:", err.message));
