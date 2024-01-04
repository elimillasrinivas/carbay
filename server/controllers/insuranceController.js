const Insurance = require('../models/Insurance');
const nodemailer = require('nodemailer');

exports.createInsurance = async (req, res) => {
  try {
    const newInsurance = new Insurance(req.body);
    const savedInsurance = await newInsurance.save();
    res.status(201).json(savedInsurance);
    sendInsuranceEmail(savedInsurance)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elimillasrinivas@gmail.com', // Your email address
      pass: 'itlk guiu nuwn ppgw' // Your app-specific password
    }
  });

// Function to send booking confirmation email to admin
function sendInsuranceEmail(data) {
  const mailOptions = {
    from: 'deepakelimilla@gmail.com', // Sender's email address
    to: 'elimillasrinivas@gmail.com', // Admin's email address
    subject: 'Insurance Cliam Form Submitting',
    html: `
      <h1> ${data.userName} insurance cliam details:</h1> 
      <p>User Name: ${data.userName}</p>
      <p>Email: ${data.email}</p>
      <p>Mobile: <b> ${data.mobileNumber} </b>,
      <p>Insurance Company: <b> ${data.insuranceCompany} </b>,
     <p>City: ${data.city}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

