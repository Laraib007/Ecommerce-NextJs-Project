import Link from 'next/link';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 bg-slate-100 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap cursor-pointer text-gray-900 font-medium items-center text-base justify-center">
      <Link href={'/tshirt'} className="mr-5 hover:text-gray-900">Tshirts</Link>
      <Link href={'/mugs'}className="mr-5 hover:text-gray-900">Mugs</Link>
      <Link href={'/hoodies'} className="mr-5 hover:text-gray-900">Hoodies</Link>
      <Link href={'/stickers'} className="mr-5 hover:text-gray-900">Stickers</Link>
    </nav>
    
    <FaCartShopping  className='text-xl absolute right-0 mx-4 top-6' />
  </div>
 
</header>
    </div>
  )
}

export default Navbar