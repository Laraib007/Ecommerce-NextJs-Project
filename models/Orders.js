import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  UserId: {type: String, required: true}, 
  product: [{
            productId: {type: String},
            quantity: {type: Number, default: 1}
            }],
  address: {type: String, required: true},
  amount: {type: Number, required: true},
  status: {type: String, default: "pending", },
}, {timestamps: true});
export default mongoose.model("Order", orderSchema)