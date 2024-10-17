import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  
  useEffect(() => {
    console.log("Hey I am useEffect from _app.js")
  }, [])
  

const saveCart =(myCart)=>{
  localStorage.setItem("cart", myCart)
}

const addToCart =(itemCode, name, price, qty, size, varient)=>{
let newCart = cart;
if(itemCode in cart){
  newCart[itemCode].qty = cart[itemCode].qty + qty
}
  else (
    newCart[itemCode] = {qty: 1, name, price, size, varient, color }
  )
  setcart(newCart)
  saveCart(newCart)
}
const removeFromCart =(itemCode, name, price, qty, size, varient)=>{
  let newCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty - qty
  }
  if(newCart[itemCode].qty <= 0){
    delete newCart[itemCode]
  }
    setcart(newCart)
  }
const clearCart = ()=>{
setcart({})
saveCart({})
}

  return (
    <>
    <Navbar />
    <Component {...pageProps} />;
    <Footer />
    </>
  )
}
