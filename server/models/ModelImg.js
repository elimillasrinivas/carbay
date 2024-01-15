const mongoose = require('mongoose');

const modelImgSchema = new mongoose.Schema({
    carCompany: String,
    modelImages : Array
});

const ModelImg = mongoose.model('ModelImg', modelImgSchema);

module.exports = ModelImg;
