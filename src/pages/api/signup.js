import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";
import { useRouter } from "next/router";
var CryptoJS = require("crypto-js");

const handler = async (req, res)=>{
    const router = useRouter()
    if(req.method == "POST"){
        try {
            let u = new Users({
                name: req.body.name,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, 'secret123').toString()
                })
                await u.save()
            res.status(200).json({ sucess: "sucess" });
    
        } catch (error) {
            res.status(404).json({ warning: "Email Already Exists" })
        }
       
    }
          
        
    } 
  
export default connectDB(handler)
