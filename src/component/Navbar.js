import Link from 'next/link';
import React, { useRef } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"

import Logo from "../component/Img/HLogo.png"
import Image from 'next/image';

const Navbar = () => {
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
    <div className="text-gray-600 bg-slate-100 body-font">
      
  <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:mr-60 ">
    <Link href={'/'}className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image src={Logo} height={10} width={100}  />
     
      <span className="ml-1 text-xl">FashionWear</span>
    
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap cursor-pointer text-gray-900 font-medium items-center text-base justify-center">
      <Link href={'/tshirt'} className="mr-4 hover:text-gray-900">Tshirts</Link>
      <Link href={'/mugs'}className="mr-4 hover:text-gray-900">Mugs</Link>
      <Link href={'/hoodies'} className="mr-4 hover:text-gray-900">Hoodies</Link>
      <Link href={'/stickers'} className="mr-4 hover:text-gray-900">Stickers</Link>
    </nav>
    <div onClick={toggleCart} className='absolute right-0 mx-4 top-6'  >
    <FaCartShopping className='text-xl ' />
    </div>
    <div ref={ref}   className='absolute w-72 top-0 right-0 py-6 px-8 bg-pink-300 transform transition-transform translate-x-full'>
   <h1 className='text-lg text-center font-bold'>This is Store Cart</h1> 
    <span onClick={toggleCart} className='absolute top-2 right-4'><MdCancel className='text-xl text-pink-600' /></span>
    <ol className='list-decimal'>
      <li>
        <div className='item flex '>
        <div className='w-2/3 font-semibold '>This T-shirt is very useFull </div>
        <div className='font-bold flex justify-center items-center  w-1/3 '><FaMinusCircle className='text-sm mx-1' />1<FaPlusCircle className='text-sm mx-1' />
        </div>
        </div>
      </li>
    </ol>
    </div>
  </div>

    </div>
  )
}

export default Navbar