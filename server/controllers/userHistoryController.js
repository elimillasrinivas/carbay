const UserHistory = require('../models/UserHistory');
const nodemailer = require('nodemailer');

exports.createUserHistory = async (req, res) => {
  const { userId, serviceName, servicePlan, carCompany, carModel, fuelType, totalPrice, user } = req.body;

  try {
    const userHistory = new UserHistory({
      userId,
      serviceName,
      user,
      servicePlan,
      carCompany,
      carModel,
      fuelType,
      totalPrice,
      status:"In Progress"
    });

    await userHistory.save();

    // Send confirmation email to admin
    sendBookingConfirmationEmail(req.body);

    res.json({userHistory,message:"History Created"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getUserHistory = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userHistory = await UserHistory.find({ userId });
    res.json(userHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateUserHistory = async (req, res) => {
  const id = req.params.id;

  try {
    const userHistory = await UserHistory.findByIdAndUpdate(id, req.body, { new: true });
    res.json(userHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.deleteUserHistory = async (req, res) => {
  const id = req.params.id;

  try {
    await UserHistory.findByIdAndDelete(id);
    res.json({ message: 'User history record deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
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
function sendBookingConfirmationEmail(data) {
  const mailOptions = {
    from: 'deepakelimilla@gmail.com', // Sender's email address itlk guiu nuwn ppgw
    to: 'elimillasrinivas@gmail.com', // Admin's email address
    subject: 'New User Booking',
    html: `
      <h1>New user booking details:</h1>
      <p>Service Name: ${data.serviceName}</p>
      <p>Service Plan: ${data.servicePlan}</p>
      <p>Car Details: Car Comapny : <b> ${data.carCompany} </b>, Car MOdel : <b> ${data.carModel}</b>, Fuel Type: <b> ${data.fuelType}</b></p>
      <p>Price: $${data.totalPrice}</p>
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



