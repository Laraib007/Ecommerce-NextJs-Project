import React from 'react'

const Checkout = () => {
  return (
    <div className='container'>
      
      <h1 className='m-2 font-bold text-center'>CHECKOUT</h1>
     <div className="mt-10 flex container justify-center ">
  
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
        <label for="name" className=" text-sm font-medium ml-1 text-gray-900">Full Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
      </div>
    </div>
  )
}

export default Checkout