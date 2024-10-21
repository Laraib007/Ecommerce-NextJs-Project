import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5";





const Checkout = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  return (
    <div className='container'>
      
      <h1 className='m-2 font-bold text-center'>CHECKOUT</h1>
      <h1 className='m-2 font-xl text-center'>ENTER YOUR COMPELETE DETAILS AND ADDRESS</h1>
     <div className="mt-4 flex container justify-center ">
  
      <div className='w-96 m-3 '>
        <label for="name" className=" text-sm font-medium ml-1 text-gray-900">Full Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-3 '>
        <label for="email" className=" text-sm font-medium ml-1 text-gray-900">Email Address</label>
          <input id="email" name="email" type="email" autocomplete="email" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
      <div className="mt-2 flex container justify-center ">
      <div className='w-96 m-3 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Cell No</label>
          <input id="number" name="number" type="number" autocomplete="number" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-3 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Alt Cell No</label>
          <input id="number" name="number" type="number" autocomplete="number" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
      <div className="mt-4 flex container justify-center ">
  
  <div className='w-2/3 '>
    <label for="address" className=" text-sm font-medium ml-1 text-gray-900">Address</label>
      <textarea id="address" name="address" type="text" autocomplete="address" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
  {/* <-------CART ITEMS------> */}
  </div>
    <div className=' bg-pink-300 w-2/3 center ml-24'>
   <h1 className='text-lg text-center font-bold m-2'>This is Store Cart</h1> 
    <span className='absolute top-2 right-4'><MdCancel className='text-xl text-pink-600' /></span>
    <ol className='font-semibold list-decimal'>
      {Object.keys(cart).length == 0 && <div>Your Cart is Empty!</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className='item flex '>
        <div className='w-2/3 font-semibold '>{cart[k].name}</div>
        <div className='font-bold flex justify-center items-center  w-1/3 '><FaMinusCircle onClick={()=>removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].varient)} 
        
        className='text-pink-600 text-sd mx-1' />{cart[k].qty}<  FaPlusCircle className='text-pink-600 text-sd mx-1' onClick={()=>addToCart(k, cart[k].name, cart[k].price, 1, cart[k].size, cart[k].varient)} />
        </div>
        </div>
      </li>})}
    </ol>
    
    </div>
  </div>
  )
}

export default Checkout