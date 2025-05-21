import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let {title, avlQty, price} = req.body
        let p = await Products.findOneAndUpdate(req.body._id, {title, avlQty, price})
       await p.save()
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)