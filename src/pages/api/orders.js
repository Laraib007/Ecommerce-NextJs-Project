import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    let token = req.body.token
    let data = jwt.verify(token, 'secret123')    
    let orders = await Orders.find({email: data.email})
    res.status(200).json(orders)
    } 
  
export default connectDB(handler)
