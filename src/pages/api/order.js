import Orders from "../../../models/Orders";
import Products from '../../models/Products';
import connectDB from "../../../middleware.js/mongoose";

const handler = async (req, res)=>{
   
    if(req.method == "POST"){
        try {
            let product, sumTotal=0
      for(let item in cart){
       sumTotal = cart[item].price * cart[item].qty
       product = await Products.findOne({slug: item})
       if(product.price !== cart[item].price){ 
         console.log("Sorry!, Some Item of Your Cart is changed. Please Try Again")
         return
       }
       if(sumTotal !== subTotal){
         console.log("Sorry!, Some Item of Your Cart is changed. Please Try Again")
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
            
        } catch (error) {
            res.status(404).json({ warning: "Product not added" })
        }
    }
          
     
    } 
  
export default connectDB(handler)
