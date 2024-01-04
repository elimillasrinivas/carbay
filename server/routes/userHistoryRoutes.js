const express = require('express');
const router = express.Router();
const userHistoryController = require('../controllers/userHistoryController');

// Create a user history record
router.post('/add', userHistoryController.createUserHistory);

// Get user history records
router.get('/:userId', userHistoryController.getUserHistory);

// Update a user history record
router.put('/:id', userHistoryController.updateUserHistory);

// Delete a user history record
router.delete('/:id', userHistoryController.deleteUserHistory);

module.exports = router;
