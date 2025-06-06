import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {type: String, required: true}, 
  slug: {type: String, required: true, unique: true},
  desc: {type: String, required: true},
  img: {type: String, required: true},
  category: {type: String},
  size: {type: String},
  color: {type: String},
  price: {type: Number, required: true},
  avalibleQty: {type: Number, required: true}
}, {timestamps: true});
export default mongoose.models?.Product || mongoose.model('Product', productSchema);