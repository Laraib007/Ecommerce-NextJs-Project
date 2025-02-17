import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let u = await Users.findOne({email: req.body.email})
       
            try {
                if(u){
                    if(u.email == req.body.email && u.password == req.body.password){
                        res.status(200).json({ sucess: "sucess" });
                    }
                    else{
                        res.status(404).json({ warning: "Invalid Creditionals" })
                    }
                }
            } catch (error) {
                res.status(404).json({ warning: "User Not Found" })
            }
            
                
            
    
        }         
        
    } 
  
export default connectDB(handler)
