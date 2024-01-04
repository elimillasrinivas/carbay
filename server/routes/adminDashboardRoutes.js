const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const adminDashboardController = require("../controllers/adminDashboardController")


// Get All User Histories
router.get('/all/histories', authMiddleware.authenticateAdmin, adminDashboardController.getAllUserHistories);

// Update User History Status (Admin Protected)
router.put('/history/:id', authMiddleware.authenticateAdmin, adminDashboardController.updateUserHistoryStatus);

module.exports = router;
