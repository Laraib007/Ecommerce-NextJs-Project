import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
import jwt from 'jsonwebtoken';
import Admin from "../../../models/Admin";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        const token = req.body.token
         const data = jwt.verify(token, 'topsecret')
        let admin = await Admin.findOne({email: data.email})
        if(admin){
            let u = await Orders.find()
             res.status(200).json(u)
        }
        else{
            let orders = await Orders.find({email: data.email})
            res.status(200).json(orders)
        }
    
    
    } 
}
export default connectDB(handler)
