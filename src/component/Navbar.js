import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import { IoBagCheck } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation'

import Logo from "../component/Img/HLogo.png"
import Image from 'next/image';

const Navbar = ({key, user, cart, addToCart, clearCart, removeFromCart, subTotal}) => {
  const [dropDown, setDropDown] = useState(false)
  const mouseHover = ()=>{
    setDropDown(!dropDown)
  }


  const currentPath = usePathname()
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
      
  <div className=" flex-no-wrap fixed  top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 light:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 mx-auto  flex-wrap p-5 flex-col md:flex-row  md:mr-60 ">
    <Link href={'/'}className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={Logo} height={10} width={100}  />
    
    </Link>
    <nav className="md:ml-auto md:mr-auto  flex flex-wrap cursor-pointer text-gray-900 font-medium items-center text-base justify-center">
      <Link href={'/tshirt'} className="mr-4 hover:text-pink-600">Tshirts</Link>
      <Link href={'/mugs'}className="mr-4 hover:text-pink-600">Mugs</Link>
      <Link href={'/hoodies'} className="mr-4 hover:text-pink-600">Hoodies</Link>
      <Link href={'/stickers'} className="mr-4 hover:text-pink-600">Stickers</Link>
    </nav>
    <div  className='absolute flex items-center right-0 mx-4 top-6'  >
    {<div id="dropdown" class="absolute  right-9 top-6 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-pink-600">
    <ul class="py-2 text-sm font-bold text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Account</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log out</a>
      </li>
    </ul>
</div>}
     {user.value && <CgProfile onMouseOver={mouseHover} onMouseLeave={mouseHover} className='text-2xl font-bold cursor-pointer text-pink-600 mr-3' />}
     
     {!user.value && <Link href={'/login'}> <button class="flex ml-auto mx-2 text-sm text-white bg-pink-500 border-0 py-0.5 px-1 focus:outline-none hover:bg-pink-600 rounded">Login</button></Link>
          }
          
    <FaCartShopping onClick={toggleCart} className='text-2xl cursor-pointer text-pink-600 ' />
    </div>
    <div ref={ref}   className={`absolute overflow-y-scroll w-72 h-[100vh] top-0 right-0 py-6 px-8 bg-pink-300 transform transition-transform  ${Object.keys(cart).length === 0 || currentPath === "/orderplaced" || currentPath === "/checkout" ? "translate-x-full": "translate-x-0"} `}>
   <h1 className='text-lg text-center font-bold m-2'>This is Store Cart</h1> 
    <span onClick={toggleCart} className='absolute top-2 right-4'><MdCancel className='text-xl text-pink-600' /></span>
    <ol className='font-semibold list-decimal'>
      {Object.keys(cart).length == 0 && <div>Your Cart is Empty!</div>}
      {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className='item flex '>
        <div className='w-2/3 font-semibold '>{cart[k].name}({cart[k].size}/{cart[k].varient})</div>
        <div className='font-bold flex justify-center items-center  w-1/3 '><FaMinusCircle onClick={()=>removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].varient)} 
        
        className='text-pink-600 text-sd mx-1' />{cart[k].qty}<  FaPlusCircle className='text-pink-600 text-sd mx-1' onClick={()=>addToCart(k, cart[k].name, cart[k].price, 1, cart[k].size, cart[k].varient)} />
        </div>
        </div>
      </li>})}
    </ol>
    <div className='font-semibold my-2'>Sub Total: <span className='font-bold'> Rs.{subTotal}</span></div>
    <div className='flex'>
      <Link href={'/checkout'}> 
    <button class="flex mt-8 text-white bg-pink-500 border-0 py-1.5 px-2.5 focus:outline-none hover:bg-pink-600 rounded text-sm"><IoBagCheck  className='text-lg md-1 mr-1 ' />Checkout</button> </Link>
    <button onClick={clearCart} class="flex mt-8 ml-2 text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
    </div>
    </div>
  </div>

    </div>
  )
}

export default Navbar