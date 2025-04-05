import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  email: {type: String, required: true}, 
  product: {type: Object, required: true},
  address: {type: String, required: true},
  amount: {type: Number, required: true},
  status: {type: String, default: "pending", required: true}
}, {timestamps: true});
mongoose.models = {}
export default mongoose.model("Orders", orderSchema)