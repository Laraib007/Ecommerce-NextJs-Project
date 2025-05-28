import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: {type: String, required: true},  
  product: {type: Object, required: true},
  email: {type: String, required: true},
  number: {type: Number, required: true},
  altNumber: {type: Number},
  address: {type: String, required: true},
  amount: {type: Number, required: true},
  status: {type: String, default: "pending"},
  date: {type: String, required: true},
  id: {type: String, required: true}
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Order", orderSchema)