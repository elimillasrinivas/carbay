const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// User Profile Route (Protected)
router.get('/profile', authMiddleware.authenticateUser, authMiddleware.authorizeUser, userController.getProfile);

// User History Route (Protected)
router.get('/history', authMiddleware.authenticateUser, authMiddleware.authorizeUser, userController.getHistory);

// Update User Profile Route (Protected)
router.put('/update', authMiddleware.authenticateUser, authMiddleware.authorizeUser, userController.updateProfile);

module.exports = router;
