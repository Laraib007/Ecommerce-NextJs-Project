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
             let pendingOrd = ""
             let pendSt;
             let a;
             for (let i in u) {
                if(u[i].status.includes("pending")){
                    console.log(u[i].status)
                }
                pendingOrd += u[i].status.includes("pending")
                pendSt = u[i].status
                // console.log(u[i].status)
                }
      
      if(pendSt == "pending"){
            pendingOrd = pendingOrd.length - 1;
            a =  pendingOrd / 7;
         }
         
         res.status(200).json({u: u, a: a})
        }
        else{
            let orders = await Orders.find({email: data.email})
            res.status(200).json(orders)
        }
    
    
    } 
}
export default connectDB(handler)
