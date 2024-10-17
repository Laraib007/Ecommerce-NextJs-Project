import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

const addToCart =(itemCode, price, qty, size, varrient, color)=>{
let newCart = cart;
if(itemCode in cart){
  newCart[itemCode].qty = newCart[itemCode].qty + qty}
  else (
    newCart[itemCode] = {qty: 1, price, size, varrient, color }
  )
}

  return (
    <>
    <Navbar />
    <Component {...pageProps} />;
    <Footer />
    </>
  )
}
