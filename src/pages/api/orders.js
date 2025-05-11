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
             let pendingOrd = 0
             let compOrd = 0
             let pendSt;
             let a;
             let compOrdlnt
             for (let i in u) {
                pendingOrd += u[i].status
                pendSt = u[i].status
                }
      
      if(pendSt == "pending"){
            pendingOrd = pendingOrd.length - 1;
            a =  pendingOrd / 7;
         }
         if(pendSt == "completed"){
            compOrd = compOrd.length - 1;
            compOrdlnt =  compOrd / 7;
         }
         console.log(a)
         res.status(200).json({u: u, a: a, b: compOrdlnt})
        }
        else{
            let orders = await Orders.find({email: data.email})
            res.status(200).json(orders)
        }
    
    
    } 
}
export default connectDB(handler)
