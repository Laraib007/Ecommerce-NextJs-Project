import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  
  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.log(error)
     localStorage.clear()
    }
   
  }, [])
  

const saveCart =(myCart)=>{
  localStorage.setItem("cart", JSON.stringify(myCart))
  let subt = 0;
  let keys = Object.keys(myCart);
  for(let i = 0; i < keys.length; i++){
    subt += myCart[keys[i]].price * myCart[keys[i]].qty
  }
  setsubTotal(subt)
}

const addToCart =(itemCode, name, price, qty, size, varient)=>{
let newCart = cart;
if(itemCode in cart){
  newCart[itemCode].qty = cart[itemCode].qty + qty
}
  else (
    newCart[itemCode] = {qty: 1, name, price, size, varient }
  )
  console.log(newCart[itemCode])
  setcart(newCart)
  saveCart(newCart)
}
const removeFromCart =(itemCode, qty, name, price, size, varient)=>{
  
  let newCart = cart;
  if(itemCode in cart){
    
    newCart[itemCode].qty = cart[itemCode].qty - qty
  }
  if(newCart[itemCode].qty <= 0){
    delete newCart[itemCode]
  }
  
    setcart(newCart)
    saveCart(newCart)
  }
const clearCart = ()=>{
setcart({})
saveCart({})
}


  return (
    <>
    <div className="mt-10">
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} subTotal={subTotal} {...pageProps} />;
    <Footer />
    </div>
    </>
  )
}
