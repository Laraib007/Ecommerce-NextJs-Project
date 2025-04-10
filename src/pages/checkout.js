import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5";
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import Products from '../../models/Products';


const Checkout = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [altNumber, setAltNumber] = useState()
  const [address, setAddress] = useState()
  const [id, setId] = useState()
  const { push } = useRouter()
  const handleChange = (e)=> {
    if(e.target.name == "name"){
      setName(e.target.value)
          }
          
    else if(e.target.name == "email"){
      setEmail(e.target.value)
       }
       else if(e.target.name == "number"){
        setNumber(e.target.value)
        }
        else if(e.target.name == "altNumber"){
          setAltNumber(e.target.value)
          }
          else if(e.target.name == "address"){
            setAddress(e.target.value)
            }
            console.log(email)
     }


     const onFormSubmit = async (e)=>{
      
    //  e.preventDefault()
    const idData = Date.now() 
    const id = idData + Math.round(Math.random() * 1000)
     setId(()=> id)
    const d = new Date();
    let day = d.getDate();
    let days = d.getMonth()+1
    let dayss = d.getFullYear()
    let date = day.toString() + "-"+ days.toString() + "-" + dayss.toString()
       let data = {name, cart, email, number, altNumber, address, subTotal, id, date}
       console.log(data)
       let response = await fetch('http://localhost:3000/api/order', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       });
       let product, sumTotal=0
       for(let item in cart){
        sumTotal = cart[item].price * cart[item].qty
        product = Products.findOne({slug: item})
        if(product.price !== cart[item].price){
          console.log("Sorry!, Some Item of Your Cart is changed. Please Try Again")
        }
        if(sumTotal !== subTotal){
          console.log("Sorry!, Some Item of Your Cart is changed. Please Try Again")
        }
       }
       localStorage.removeItem("cart")
       clearCart()
       push('/order?id='+ id)
       }
       
  return (
    <div className='container mt-32'>
      
      <h1 className='m-2 font-bold text-center'>CHECKOUT</h1>
      <h1 className='m-2 text-xl font-bold text-gray-700 text-center'>ENTER YOUR COMPELETE DETAILS AND ADDRESS</h1>
     <div className="mt-4 flex container justify-center ">
  
      <div className='w-96 m-3 '>
        <label for="name" className=" text-sm font-medium ml-1 text-gray-900">Full Name</label>
          <input onChange={handleChange} value={name} id="name" name="name" type="text" autocomplete="name" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-3 '>
        <label for="email" className=" text-sm font-medium ml-1 text-gray-900">Email Address</label>
          <input onChange={handleChange} value={email} id="email" name="email" type="email" autocomplete="email" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
      <div className="mt-2 flex container justify-center ">
      <div className='w-96 m-3 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Cell No</label>
          <input onChange={handleChange} value={number} id="number" name="number" type="number" autocomplete="number" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      <div className='w-96 m-3 '>
        <label for="number" className=" text-sm font-medium ml-1 text-gray-900">Alt Cell No</label>
          <input onChange={handleChange} value={altNumber} id="altNumber" name="altNumber" type="number" autocomplete="altNumber" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
      <div className="mt-4 flex container justify-center ">
  
  <div className='w-2/3 '>
    <label for="address" className=" text-sm font-medium ml-1 text-gray-900">Address</label>
      <textarea onChange={handleChange} value={address} id="address" name="address" type="text" autocomplete="address" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </div>
  {/* <-------CART ITEMS------> */}
  </div>
    <div className=' bg-pink-300 text-center sm:ml-0 md:ml-16 px-1'>
   <h1 className='text-lg text-center text-gray-800 font-bold m-2'>Review Your Cart Items</h1> 
    <ol className='font-semibold '>
      {Object.keys(cart).length == 0 && <div className='ml-8'>Your Cart is Empty!</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className='justify-center  items-center flex '>
        <div className=' font-semibold mr-10'>{cart[k].name}({cart[k].size}/{cart[k].varient})</div>
        <div className='font-bold flex justify-center items-center  ml-10 '><FaMinusCircle onClick={()=>removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].varient)} 
        
        className='text-pink-600 text-sd mx-1' />{cart[k].qty}<  FaPlusCircle className='text-pink-600 text-sd mx-1' onClick={()=>addToCart(k, cart[k].name, cart[k].price, 1, cart[k].size, cart[k].varient)} />
        </div>
        </div>
      </li>})}
    </ol>
    <div className=' text-center font-semibold my-2'>Sub Total: <span className='font-bold'> Rs.{subTotal}</span></div>
    </div>
    <div className='flex justify-center px-1'>
    
    <button onClick={onFormSubmit} type="submit" class="flex w-50 text-center  rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Confirm</button>
    
    </div>
  </div>
  
  )
}

export default Checkout