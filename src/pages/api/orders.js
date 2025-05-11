import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
import jwt from 'jsonwebtoken';

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let u = await Orders.find()
        console.log(u.name)
    const token = req.body.token
    const data = jwt.verify(token, 'topsecret')  
    let orders = await Orders.find({email: data.email})
    res.status(200).json(u)
    } 
}
export default connectDB(handler)
