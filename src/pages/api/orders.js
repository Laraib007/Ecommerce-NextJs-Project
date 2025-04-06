import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
import jwt from 'jsonwebtoken';

const handler = async (req, res)=>{
    if(req.method == "POST"){
    const token = req.body.token
    const data = jwt.verify(token, 'secret123')    
    let orders = await Orders.find({email: data.email})
    res.status(200).json(orders)
    } 
}
export default connectDB(handler)
