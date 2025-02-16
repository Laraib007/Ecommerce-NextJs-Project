import Users from "../../../models/Users";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let u = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            })
            await u.save()
        res.status(200).json({ "sucess": "sucess" });

    }
        else return res.status(404).send( "Email Already Exists" )
        
    } 
  
export default connectDB(handler)
