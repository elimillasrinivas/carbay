const express = require('express');
const srvicesController = require('../controllers/srvicesController');

const router = express.Router();

// Signup route
router.post('/create', srvicesController.createService);
router.get('/get/:carModel', srvicesController.getServiceByCarModel);


module.exports = router;
