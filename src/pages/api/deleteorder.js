import connectDB from "../../../middleware.js/mongoose";
import Orders from "../../../models/Orders";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
        let o = await Orders.findOneAndDelete({id: token})
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)