import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
  let product = await Products.find()
  res.status(200).json({ product });
}
export default connectDB(handler)
 