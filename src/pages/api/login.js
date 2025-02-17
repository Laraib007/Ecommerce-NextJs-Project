import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        try {
            let u =  Users.findOne({email: req.body.email})
                if(u){
                    if(email == req.body.email && password == req.boy.password){
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
