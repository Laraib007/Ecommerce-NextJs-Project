import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        for (let i = 0; i < req.body.length; i++) {
        let p = await Products.findByIdAndUpdate(req.body[i]._id, req.body[i])
       await p.save()
    }
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)