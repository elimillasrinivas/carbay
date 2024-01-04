const UserHistory = require('../models/UserHistory');
const nodemailer = require('nodemailer');

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elimillasrinivas@gmail.com', // Your email address
      pass: 'itlk guiu nuwn ppgw' // Your app-specific password
    }
  });

// Function to send status update email to user
function sendStatusUpdateEmail(userHistory,user) {
    const mailOptions = {
      from: 'elimillasrinivas@gmail.com', // Sender's email address
      to: `${user.email}`, // User's email address (replace with actual user's email)
      subject: 'Service Status Update',
      html: `
        <p>Your service status has been updated:</p>
        <p>Service Name: ${userHistory.serviceName}</p>
        <p>Status: ${userHistory.status}</p>
      `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email sending error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    })
}

exports.getAllUserHistories = async (req, res) => {
  try {
    const userHistories = await UserHistory.find();
    res.json(userHistories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateUserHistoryStatus = async (req, res) => {
    const id = req.params.id;
    const { status, user } = req.body;
  
    try {
      const userHistory = await UserHistory.findByIdAndUpdate(id, { status, updatedAt: new Date() }, { new: true });
      // const userHistory = await UserHistory.find({id});
      console.log(userHistory);

      
      // Send status update email to user
      sendStatusUpdateEmail(userHistory, user);
  
      res.json(userHistory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  