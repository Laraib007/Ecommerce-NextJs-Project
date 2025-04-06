import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import React from 'react'
import Orders from '../../models/Orders';

const orderplaced = ({order}) => {
  let product = order.product
  console.log(product)
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
        {Object.keys(product).map((k)=>{return <div key={k}>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">{product[k].name} {product[k].size} / {product[k].varient}</span>
          <span class="ml-auto text-gray-900">{product[k].qty}</span>
          <span class="ml-auto text-gray-900">Rs.{product[k].price} <p className='text-sm'>Per Piece</p></span>
        </div>
        </div>})}
        <div class="flex mt-5">
          <span class="title-font font-medium text-2xl text-gray-900">Total Amount Rs.{order.amount}</span>
          
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}



export async function getServerSideProps(context) { 

    if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGOSSE_URI)
    }
    let order = await Orders.findById(context.query.id)

    return {
      props: {order: JSON.parse(JSON.stringify(order))}
    }
  }

export default orderplaced