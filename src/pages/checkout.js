import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5";
import Link from 'next/link';


const Checkout = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  const handleChange = (e)=> {


    if(e.target.name == "email"){
     setEmail(e.target.value)
     
     }
   
     else if(e.target.name == "password"){
       setPassword(e.target.value)
       
       }
   
     }


     const onFormSubmit = async (e)=>{
     e.preventDefault()
       let data = { email, password}
       let response = await fetch('http://localhost:3000/api/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       });
     
       const result = await response.json();
       console.log(result.sucess);
     
     
     if(result.sucess){
       console.log(result)
       toast.success('You logged in successfully', {
         position: "top-left",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme: "colored"
         });
     localStorage.setItem("token", result.token)
         setTimeout(() => {
           router.push("http://localhost:3000/")
         }, 1500);
       } else { toast.error('Wrong Credentials ', {
         position: "top-left",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: "colored"
         });}
     
     setEmail('')
     setPassword('')
       }
  return (
    <div className='container mt-32'>
      
      <h1 className='m-2 font-bold text-center'>CHECKOUT</h1>
      <h1 className='m-2 text-xl font-bold text-gray-700 text-center'>ENTER YOUR COMPELETE DETAILS AND ADDRESS</h1>
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
      <Link href={'/orderplaced'}>
    <button type="submit" class="flex w-50 text-center  rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Confirm</button>
    </Link>
    </div>
  </div>
  )
}

export default Checkout