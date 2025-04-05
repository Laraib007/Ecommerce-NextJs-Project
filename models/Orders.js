import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: {type: String, required: true},  
  product: {type: Object, required: true},
  email: {type: String, required: true},
  number: {type: Number, required: true},
  altNumber: {type: Number, required: true},
  address: {type: String, required: true},
  amount: {type: Number, required: true},
  status: {type: String, default: "pending", required: true}
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Orders", orderSchema)