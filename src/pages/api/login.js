import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let u = await Users.findOne({email: req.body.email})
       
          
                if(u){
                    if(req.body.email ==  u.email && req.body.password  == u.password){
                        res.status(200).json({ sucess: "sucess" });
                    }
                    else{
                        res.status(404).json({ warning: "Invalid Creditionals" })
                    }
                }            
            
    
        }
          
        
    } 
  
export default connectDB(handler)
