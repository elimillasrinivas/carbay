const mongoose = require('mongoose');

const userHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user:{
    name:{type: String},
    email:{type:String},
    mobile:{type:Number}
  },
  serviceName: { type: String, required: true },
  servicePlan: { type: String, enum: ['standard', 'comprehensive'], required: true },
  carCompany: { type: String, required: true },
  carModel: { type: String, required: true },
  fuelType: { type: String, enum: ['diesel', 'petrol', 'cng'], required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ['In Progress', 'Completed', 'Cancelled'], default: 'In Progress' },
},
{timestamps:true});

const UserHistory = mongoose.model('UserHistory', userHistorySchema);

module.exports = UserHistory;
