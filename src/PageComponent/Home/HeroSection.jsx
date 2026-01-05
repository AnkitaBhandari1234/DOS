'use client'
import { motion } from "framer-motion";
import { Geist, Inter, Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BgImage from "../../../public/bgimage1.jpg";


const quicksand=Quicksand({
  weight:'700'
})
 
const roboto= Roboto({
  weight:'400'

})
const meriweather =Merriweather({
  weight:'700'
})

const HeroSection = () => {
  return (
  
    <section className="    ">
      <div className="relative ">

      {/*  image */}
      <div className="relative ">
        <Image src={BgImage} alt="" width={1000} height={1000} className="relative w-screen " />
        <div className="bg-[#0F172A]/80 w-full h-full absolute top-0 right-0 left-0"></div>
      </div>
      {/* text */}
      <div className={ `  w-8/12 absolute  top-2/6 left-1/6 text-white text-center ${roboto.className} flex flex-col gap-5 items-center `  }>
       <motion.span
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
    className="uppercase tracking-widest text-sm bg-[#656C7B]/50 px-2.5 py-1 rounded-full"
  >
    10+ Years of Excellence
  </motion.span>
        <h1 className={`${meriweather.className} text-[60px] leading-20 `}>Building Your Tech Career Forward</h1>
        <p className="text-[17px] tracking-wide   ">
          From  basics coding to advanced modern technologies,  delivers industry-focused training programs across Nepal — practical, job-ready, and designed to help you succeed.
        </p>
        <div className={` text-lg flex gap-4 items-center`}>
          <Link href="/learn" className="bg-[#524DD3] px-8 py-2.5  rounded-full  hover:shadow-[0_4px_20px_rgba(82,77,211,0.5)] hover:scale-105 transition-all duration-300 ease-in-out">Start Learning</Link>
          <Link href="/courses" className="border-white border px-8 py-2.5 rounded-full bg-[#656C7B]/50 hover:scale-105 transition-all duration-300 ease-in-out  ">View Courses</Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
