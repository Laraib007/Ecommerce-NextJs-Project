import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
  let product = await Products.find()
  let tshirts = {}
  for(let item in Products){
    if(!tshirts){

    }
    else {
      if(tshirts[item.title])

    }
  }
  res.status(200).json({ product });
}
export default connectDB(handler)
 