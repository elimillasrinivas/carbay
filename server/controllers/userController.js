const User = require('../models/User');

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract userId from the authenticated user's information

    // Fetch user data from the database
    const user = await User.findById(userId, { password: 0 }); // Exclude password from the response

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract userId from the authenticated user's information
    const { userName, email, mobileNumber } = req.body;
    // Fetch the user from the database
    const user = await User.findById(userId);                                 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user data
    user.userName = userName || user.userName; 
    user.email = email || user.email; 
    user.mobileNumber = mobileNumber || user.mobileNumber;

    // Save the updated user data
    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Get user history
exports.getHistory = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract userId from the authenticated user's information

    // Fetch user history from the database
    const userHistory = await User.findById(userId, 'history').populate('history.service', 'serviceName date');

    if (!userHistory) {
      return res.status(404).json({ message: 'User not found or no history available' });
    }

    res.json(userHistory.history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
