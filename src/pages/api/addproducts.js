import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        for (let i = 0; i < req.body.length; i++) {
        let p = new Products({
           
                title:  req.body[i].title,
                slug:  req.body[i].slug,
                desc:  req.body[i].desc,
                img:   req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price:   req.body[i].price,
                avalibleQty:  req.body[i].avalibleQty,        
        })
       await p.save()
    }
       
        res.status(200).json({ "sucess": "sucess" });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)