import Link from 'next/link';
import React, { useRef } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import Logo from "../component/Img/HLogo.png"
import Image from 'next/image';

const Navbar = ({cart, addToCart, clearCart, removeFromCart, subTotal}) => {
 
  const toggleCart = ()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
 
  const ref = useRef()
  return (
    <div className=" text-gray-600 bg-slate-100 body-font ">
      
  <div className=" flex-no-wrap fixed  top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 mx-auto  flex-wrap p-5 flex-col md:flex-row  md:mr-60 ">
    <Link href={'/'}className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={Logo} height={10} width={100}  />
    
    </Link>
    <nav className="md:ml-auto md:mr-auto  flex flex-wrap cursor-pointer text-gray-900 font-medium items-center text-base justify-center">
      <Link href={'/tshirt'} className="mr-4 hover:text-pink-600">Tshirts</Link>
      <Link href={'/mugs'}className="mr-4 hover:text-pink-600">Mugs</Link>
      <Link href={'/hoodies'} className="mr-4 hover:text-pink-600">Hoodies</Link>
      <Link href={'/stickers'} className="mr-4 hover:text-pink-600">Stickers</Link>
    </nav>
    <div  className='absolute flex right-0 mx-4 top-6'  >
     <Link href={'/login'}><CgProfile  className='text-2xl font-bold cursor-pointer text-pink-600 mr-3' /></Link>
    <FaCartShopping onClick={toggleCart} className='text-2xl cursor-pointer text-pink-600 ' />
    </div>
    <div ref={ref}   className={`absolute w-72 h-[100vh] top-0 right-0 py-6 px-8 bg-pink-300 transform transition-transform  ${Object.keys(cart).length === 0 ? "translate-x-full": "translate-x-0"} `}>
   <h1 className='text-lg text-center font-bold m-2'>This is Store Cart</h1> 
    <span onClick={toggleCart} className='absolute top-2 right-4'><MdCancel className='text-xl text-pink-600' /></span>
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
    <div className='font-semibold my-2'>Sub Total: <span className='font-bold'> Rs.{subTotal}</span></div>
    <div className='flex'>
      <Link href={'/checkout'}> 
    <button class="flex mt-8  text-white bg-pink-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagCheck  className='text-lg md-1 mr-1 ' />Checkout</button> </Link>
    <button onClick={clearCart} class="flex mt-8 ml-2 text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
    </div>
    </div>
  </div>

    </div>
  )
}

export default Navbar