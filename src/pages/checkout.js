import React from 'react'

const Checkout = () => {
  return (
    <div className='container'>
      
      <h1 className='m-2 font-bold text-center'>CHECKOUT</h1>
     <div class="mt-10 row ">
      <div className='w-96'>
        <label for="email" class=" text-sm font-medium  text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div className='w-96'>
        <label for="email" class=" text-sm font-medium  text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Checkout