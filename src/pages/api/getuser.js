import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    if(req.method == "POST"){email
        let u = await Users.findOne({email: req.body.email})
        
        // let user = jwt.verify(token,'topsecret');
        // res.status(200).json({ sucess: "sucess", user});
             if(u){
                console.log("work")
             } console.log(u)
    
        } else {
            res.status(404).json({ warning: "Invalid Request" })
        }     
          
        
    } 
  
export default connectDB(handler)
