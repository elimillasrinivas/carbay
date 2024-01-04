const mongoose = require("mongoose");

const generalType = {
  comprehensive: String,
  standard: String,
};

const paintingType = {
  alloy: String,
  fullBody: String,
  prepanel: String,
};

const batteryType = {
  batteryReplacement: String,
  jumpStart: String,
};

const checkupType = {
  generalHealth: String,
  otherServices: String,
};

const doorStepType = {
  fullPeriodic: String,
  doorService: String,
  batteryReplacement: String,
};

const tyreType = {
  acService: String,
  electricalRepair: String,
};

const ppfType = {
  paint: String,
  ceramic: String,
};

const acType = {
  wheel: String,
  alignment: String,
  tyreReplacement: String,
};



const types= {
    general: generalType,
    painting: paintingType,
    battery: batteryType,
    checkup: checkupType,
    ac: acType, 
    tyre: tyreType,
    doorStep: doorStepType,
    ppf: ppfType,
  }

const carServicesSchema = new mongoose.Schema({
  carCompany: String,
  carModel: { type: String, unique: true },
  petrol: types,
  diesel: types,
  ev: types,
});

module.exports = mongoose.model('CarServices', carServicesSchema);
