import Orders from "../../../models/Orders";
import Products from '../../../models/Products';
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
   
    if(req.method == "POST"){
        try {
            let product, sumTotal=0
            let cart = req.body.cart
            for(let item in cart){
            sumTotal = cart[item].price * cart[item].qty
            product = await Products.findOne({slug: item})
            if(product.avalibleQty < cart[item].qty){
                return res.status(403).json({err: "Sorry!, Some Item of Your Cart are out of stock. Please Try Again"})
            }
            if(product.price !== cart[item].price){ 
                res.status(404).json({err: "Sorry!, Some Item of Your Cart is changed. Please Try Again"})
                return
                    }
                    if(sumTotal !== req.body.subTotal){
                        res.status(404).json({err: "Sorry!, Some Item of Your Cart is changed. Please Try Again"})
                        return
                    }
                    
      }
            let o = new Orders({
                name: req.body.name,
                product: req.body.cart,
                email: req.body.email,
                number: req.body.number,
                altNumber: req.body.altNumber,
                address: req.body.address,
                amount: req.body.subTotal,
                id:  req.body.id,
                date:  req.body.date
                })
                await o.save()
            res.status(200).json({ sucess: "sucess" });
            for(let slug in cart){
                product = await Products.findOneAndUpdate({slug: slug}, { $inc:{"avalibleQty": - product[slug].qty}})
                return product;
            }
        } catch (error) {
            res.status(404).json({ warning: "Product not added" })
        }
    }
          
     
    } 
  
export default connectDB(handler)
