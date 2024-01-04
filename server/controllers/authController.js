const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const keys = require('../configs/keys');

// Signup
exports.signup = async (req, res) => {
  try {
    const { email, mobileNumber, userName, password, role } = req.body;

    // Check if user already exists
    let user = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      email,
      mobileNumber,
      userName,
      password: hashedPassword,
      role,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { userEmailOrMobile, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ $or: [{ email:userEmailOrMobile }, { mobileNumber :userEmailOrMobile}] });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, keys.jwtSecret, { expiresIn: '1h' });

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
