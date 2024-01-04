const express = require('express');
const insuranceController = require('../controllers/insuranceController');

const router = express.Router();

router.post('/insurance', insuranceController.createInsurance);

module.exports = router;
