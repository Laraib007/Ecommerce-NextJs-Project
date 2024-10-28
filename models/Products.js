import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {type: String, required: true}, 
  slug: {type: String, required: true, unique: true},
  desc: {type: String, required: true},
  qty: {type: Number, default: 1, },
  amount: {type: Number, required: true},
  category: {type: String},
  size: {type: String},
  color: {type: String}
}, {timestamps: true});
export default mongoose.model("Product", productSchema)