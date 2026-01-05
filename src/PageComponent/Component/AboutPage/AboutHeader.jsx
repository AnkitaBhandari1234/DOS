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
//     <section className="relative bg-[url('/bgimage1.jpg')] bg-cover bg-center h-lvh flex items-center justify-center   ">
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-[#0B0F1A]/70  "></div>
// <div className="absolute inset-0  bg-[linear-gradient(to_right,#0F172A90,#524DD380)] "></div>

//       {/* Header Content */}
//       <div className={`relative text-center px-6 md:px-12  ${roboto.className} text-center   w-7/12 h-64 flex flex-col  items-center gap-4 `}>
//         <div className='bg-[linear-gradient(to_right,#1E3A8A,#3B82F6)] px-2.5 py-1 rounded-full flex gap-2 items-center w-fit     shadow-md'>

//         <SlBadge className='text-white text-sm   ' />
//         <span className={`  text-sm  text-white`}>Top IT Institute in Butwal</span>
//         </div>
//         <h1 className={ `text-7xl md:text-5xl font-bold text-white leading-snug  ${meriweather.className}`}>
//          Turning Passion into Digital Skills
//         </h1>
//         <p className={`tracking-wide text-gray-200     `}>
//           Providing hands-on IT training, career-focused programs, and mentorship for aspiring tech professionals in Butwal. Learn real-world skills in web development, programming, cloud technologies, and AI, and transform your passion into a successful tech career.
//         </p>
        
//         <a
//           href="/courses"
//           className="bg-[#524DD3] hover:bg-[#423bb0] text-white  py-3 px-5  rounded-lg w-fit  transition"
//         >
//           Explore Courses
//         </a>
//       </div>
      
//     </section>
<section className='bg-[#F8FAFC] h-[900px] flex flex-col gap-10 py-8 '>
    <div className='w-10/12 mx-auto   mt-30'>

    <h1 className={`text-[#0F172A] text-5xl ${meriweather.className}  text-center mx-10 leading-tight `}>We Deliver Everything You Need  
to Build a Successful <span className='text-[#524DD3]'>IT Career</span></h1>
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
