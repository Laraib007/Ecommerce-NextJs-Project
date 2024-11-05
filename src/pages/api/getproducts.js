import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
  let product = await Products.find()
  let tshirts = {}
  for(let item in Products){
  
    if(item.title in tshirts){

    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if(item.avalibleQty > 0){
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }

    }
  }
  res.status(200).json({ product });
}
export default connectDB(handler)
 