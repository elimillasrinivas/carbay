const express = require('express');
const srvicesController = require('../controllers/srvicesController');

const router = express.Router();

router.post('/create', srvicesController.createService);
router.get('/get/:carModel', srvicesController.getServiceByCarModel);
router.get('/get-images/:carCompany', srvicesController.getModelImagesByCarCompany);


module.exports = router;
