import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        try {
            let u =  Users.findOne({email: req.body.email})
                await u.save()
            res.status(200).json({ sucess: "sucess" });
    
        } catch (error) {
            res.status(404).json({ warning: "Email Already Exists" })
        }
       
    }
          
        
    } 
  
export default connectDB(handler)
