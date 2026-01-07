// components/About/AboutHeader.jsx
import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { SlBadge } from "react-icons/sl";


const meriweather =Merriweather({
  weight:'700'
})

const AboutHeader = () => {
  return (

<section className='bg-[#F8F7F3] h-[900px] flex flex-col gap-10 py-8 '>
    <div className='w-10/12 mx-auto   mt-30'>

    <h1 className={`text-[#0F172A] text-5xl ${meriweather.className}  text-center mx-10 leading-tight `}>We Deliver Everything You Need  
to Build a Successful <span className='text-[#B12531]'>IT Career</span></h1>
    </div>
    <div className='grid grid-cols-11 gap-3 items-center mx-14'>
        <Image src='/aimage2.jpg' alt='' width={200} height={400} className=' col-span-2 rounded-2xl object-cover h-[250px] w-full transition-transform duration-300 ease-in-out hover:scale-105 '/>
        <Image src='/aimage1.jpg' alt='' width={200} height={400} className=' col-span-2 rounded-2xl object-cover h-[350px] w-full transition-transform duration-300 ease-in-out hover:scale-105'/>
        <Image src='/about1.webp' alt='' width={600} height={600} className=' col-span-3  rounded-2xl object-cover h-[450px] w-full  transition-transform duration-300 ease-in-out hover:scale-105'/>
        <Image src='/bgimage2.jpg' alt='' width={200} height={400} className=' col-span-2 rounded-2xl object-cover h-[350px] w-full transition-transform duration-300 ease-in-out hover:scale-105'/>
        <Image src='/aimage3.jpg' alt='' width={200} height={400} className= ' col-span-2 rounded-2xl object-cover h-[250px] w-full transition-transform duration-300 ease-in-out hover:scale-105 '/>

    </div>

    </section>
  );
};

export default AboutHeader;
