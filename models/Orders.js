import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: {type: String, required: true},  
  cart: {type: Object, required: true},
  email: {type: String, required: true},
  number: {type: Number, required: true},
  altNumber: {type: Number, required: true},
  address: {type: String, required: true},
  subTotal: {type: Number, required: true},
  status: {type: String, default: "pending"}
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Order", orderSchema)