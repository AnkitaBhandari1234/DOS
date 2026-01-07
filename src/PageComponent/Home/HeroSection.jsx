'use client'
import { motion } from "framer-motion";
import {  Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward, IoPlayOutline } from "react-icons/io5";




const roboto= Roboto({
  weight:'400'

})
const meriweather =Merriweather({
  weight:'700'
})

const HeroSection = () => {
  return (
  
    
<section className="relative h-lvh">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src='/herobg1.jpg'
      alt="Hero Background"
      fill
      className="object-cover"
      priority
    />

    {/* Institute-style overlay */}
    <div className="absolute inset-0 bg-black/60">
    </div>
  </div>

  {/* Content */}
  <div className={`relative  h-full 
    flex flex-col items-center text-center  justify-center   
    pt-25 ${roboto.className}`}>

    {/* Badge */}
   <div >
    <span className={`bg-[#B12531]/40 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-[#B12531]/30 font-medium ${roboto.className} tracking-wide `}>Welcome to DOS Multi Services</span>
   </div>

    {/* Heading */}
    <h1 className={`${meriweather.className} mt-5
      text-[52px] md:text-[60px] 
      leading-tight text-white max-w-4xl`}>
      Master the Korean
Language with Excellence
    </h1>

    {/* Paragraph */}
    <p className="text-[17px] text-[#E4DBD5] 
      max-w-2xl mt-5">
     Join Nepal's premier Korean language institute. Expert instructors, proven curriculum, and a path to success in TOPIK and EPS-TOPIK examinations.
    </p>

    {/* CTA */}
    <div className="flex gap-4 mt-8 font-medium text-">
      <Link
        href="/courses"
        className="bg-[#B12531] flex items-center gap-3 text-white  px-8 py-3 rounded-full
        hover:bg-[#8F1F28] tracking-wide
        transition-all duration-300"
      >
        Explore Courses
        <IoArrowForward className="text-xl" />

      </Link>

      <Link
        href="/about"
        className=" flex items-center gap-4 border border-white text-white tracking-wide
        px-8 py-3 rounded-full text-center backdrop-blur-xs
        hover:bg-white/10 transition-all duration-300"
      >
        <IoPlayOutline className="text-xl" />
        Learn More

      </Link>
    </div>

  </div>
</section>




   
  );
};

export default HeroSection;
