import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
  if(req.method == "POST"){
  let product = await Products.find()
  let outOfStock = 0;
  let inStock = 0;
  for(let item of product){
  if(item.avalibleQty == 0){
    outOfStock += item.avalibleQty == 0
    console.log(outOfStock)
  }
  res.status(200).send( outOfStock );
  }
  console.log(outOfStock)
  res.status(200).send( outOfStock );
}
}
export default connectDB(handler)
 