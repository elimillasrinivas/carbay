const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require("../controllers/userController")

const router = express.Router();



//Get Admin Profile
router.get('/profile', authMiddleware.authenticateAdmin, authMiddleware.authorizeAdmin, userController.getProfile);

// Update Profile
router.put('/update', authMiddleware.authenticateAdmin, authMiddleware.authorizeAdmin, userController.updateProfile);


module.exports = router; 
