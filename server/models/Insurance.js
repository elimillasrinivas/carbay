const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    userName: String,
    email: String,
    mobileNumber: String,
    insuranceCompany: String,
    city: String,
});

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
