import Link from 'next/link';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../component/Img/HLogo.png"
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 bg-slate-100 body-font">
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
    <FaCartShopping  className='text-xl absolute right-0 mx-4 top-6' />
    <div className='absolute top-0 right-0 p-10 bg-pink-500'>
    This is Store Cart
    <div><span>T-shirt - Stylish tshirt</span></div>
    
    </div>
  </div>
 
</header>
    </div>
  )
}

export default Navbar