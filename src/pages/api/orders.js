import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
import jwt from 'jsonwebtoken';

const handler = async (req, res)=>{
    if(req.method == "POST"){
    const token = req.body.token
    console.log(Orders.collection.find("orders"))
    const data = jwt.verify(token, 'topsecret')
    console.log(Orders.find({ usersInfo: { forAllDBs: true } }))    
    let orders = await Orders.find({email: data.email})
    res.status(200).json(orders)
    } 
}
export default connectDB(handler)
