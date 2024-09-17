import Image from 'next/image'
import React from 'react'
import IMG from './Img/420x260.png'

const Allproduct = () => {

    return (
        <div>

            <section className="text-gray-600 body-font">
                <div class="flex py-14 flex-col text-center w-full">
                    
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Ecommerce Store</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="container px-5 py-7 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md  ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">$18.40</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">$16.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">$21.15</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">$12.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image width={500} height={100} alt="ecommerce" className="object-cover object-center w-full h-full block" src={IMG} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">$18.40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Allproduct