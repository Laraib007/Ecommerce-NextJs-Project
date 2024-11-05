import Link from 'next/link'
import React from 'react'
import mongoose from "mongoose";
import Products from '../../models/Products';

const Tshirt = ({products}) => {
    console.log(products)
  return (
    <div>

    <section className="text-gray-600 body-font">
        <div className="flex py-14 flex-col text-center w-full">
            
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Ecommerce Store</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div className="container px-5 py-7 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
                
            {Object.keys(products).map((items)=>{ return    <div key={items.slug} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md m-4  ">
                    <a className=" relative rounded overflow-hidden contents">
                      
          <img alt="ecommerce" className="object-cover object-center w-72 h-72 block " src={items.img}/>
                    </a>
                    <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{items.title}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{items.title}</h2>
                        <p className="mt-1">Rs.{items.price}</p>
                    </div>
                    <Link href={`/product/${items.slug}`}>Buy Now</Link>
                </div>
                })}
                
              
                </div>
            </div>
    </section>
</div>
  )
}
export async function getServerSideProps(products) {
    
    if(!mongoose.connections[0].readyState){
    mongoose.connect(process.env.MONGOSSE_URI)
    }
    let product = await Products.find({category: "tshirt"})
    let tshirts = {}
  for(let item of product){
  
    if(item.title in tshirts){
        if(!tshirts[item.title].color.includes(item.color) && item.avalibleQty > 0){
          tshirts[item.title].color.push(item.color)
        }
        if(!tshirts[item.title].size.includes(item.size) && item.avalibleQty > 0){
          tshirts[item.title].size.push(item.size)
        }
    }
    else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item))
      if(item.avalibleQty > 0){
        tshirts[item.title].color = [item.color]
        tshirts[item.title].size = [item.size]
      }

    }
  }
    return {
      props: {products: JSON.parse(JSON.stringify(tshirts))},
    }
  }

export default Tshirt