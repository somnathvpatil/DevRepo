// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 465,
  secure: false, // use SSL
  auth: {
    user: '97fe2047e96bad',
    pass: '1b80dc7f0baf2c',
  }
});
//https://mailtrap.io/home

// Configure the mailoptions object
const mailOptions = {
  from: 'som.vpatil@gmail.com',
  to: 'som.vpatil@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});