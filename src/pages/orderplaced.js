import React from 'react'

const orderplaced = ({cart, subTotal}) => {
  return (
    <div className='h-3/4 mb-2'>
        <section class="text-gray-600 body-font overflow-hidden ">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">FASHION WEAR</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">ORDER ID #312478</h1>
       
        <p class="leading-relaxed mb-4">Best Quality - Premium Desings - Stylish Look - Better Experience</p>
        <div class="flex text-center mb-4">
          <a class="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1 sm:ml-20  md:mr-40">Description</a>
          <a class="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1 md:mr-6">Qty</a>
          <a class="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1 ml-8">Price</a>
        </div>
        {Object.keys(cart).map((k)=>{return <div key={k}>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">{cart[k].name}({cart[k].size}/{cart[k].varient})</span>
          <span class="ml-auto text-gray-900">{cart[k].qty}</span>
          <span class="ml-auto text-gray-900">{cart[k].price}</span>
        </div>
        </div>})}
        <div class="flex mt-5">
          <span class="title-font font-medium text-2xl text-gray-900">Total Amount Rs.1199</span>
          
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default orderplaced