import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let u = await Users.findOne({email: req.body.email})
        var bytes  = CryptoJS.AES.decrypt(u.password, 'secret123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
              if(u){
                    if(req.body.email ==  u.email && req.body.password  == originalText){
                        var token = jwt.sign({email:u.email, name:u.name },'shhhhh');
                        res.status(200).json({ sucess: "sucess", token });
                        console.log(token)
                    }
                    else{
                        res.status(404).json({ warning: "Invalid Creditionals" })
                    }
                } else{
                    res.status(404).json({ warning: "User Not Found" })
                }       
            
    
        } else {
            res.status(404).json({ warning: "Invalid Request" })
        }     
          
        
    } 
  
export default connectDB(handler)
