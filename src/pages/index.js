import Image from "next/image";
import localFont from "next/font/local";
import slider1 from "../component/Img/slider1.jpg"
import slider2 from "../component/Img/slider2.jpg"
import slider3 from "../component/Img/slider3.jpg"
import slider4 from "../component/Img/slider4.jpg"
import slider5 from "../component/Img/slider5.jpg"
import Head from "next/head";
import { TbHanger } from "react-icons/tb";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  return (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </Head>
     <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto">
    {/* <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to Our Ecommerce Store</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Wear Whatever you want! you want to wear the Latest Fashion? wear it with FashionWear.com</p>
    </div> */}
    


<div className=" z-10 ">
 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={slider1} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider2} width={"1500"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider3} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider4} width={"1600"} height={100} /></SwiperSlide>
        <SwiperSlide><Image src={slider5} width={"1600"} height={100} /></SwiperSlide>
      </Swiper>
</div>

    <div className="flex items-center justify-center text-center flex-wrap m-4 ">

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-8 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
           <TbHanger className="w-8 h-8" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Premium Cloths</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
