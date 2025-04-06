import Orders from "../../../models/Orders";
import connectDB from "../../../middleware.js/mongoose";
import { NextResponse } from "next/server";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        try {
            let o = new Orders({
                name: req.body.name,
                product: req.body.cart,
                email: req.body.email,
                number: req.body.number,
                altNumber: req.body.altNumber,
                address: req.body.address,
                amount: req.body.subTotal
                })
                await o.save()
            res.status(200).json({ sucess: "sucess" });
            NextResponse.redirect("/")
        } catch (error) {
            res.status(404).json({ warning: "Product not added" })
        }
       
    }
          
        
    } 
  
export default connectDB(handler)
