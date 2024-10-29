import Products from "../../../models/Products";
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
    if(req.method == "POST"){
        let p = new Products({
            title:  req.body[i].title,
            slug:  req.body[i].slug,
            desc:  req.body[i].desc,
            img:   req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].,
            color: req.body[i].,
            price:   req.body[i].,
            avalibleQty:  req.body[i].,
        })
        let product = await Products.find()
        res.status(200).json({ product });
    } else {
        res.status(400).json({err: "bad request"})
    }
  
}
export default connectDB(handler)