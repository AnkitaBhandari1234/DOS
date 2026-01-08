import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiClock } from 'react-icons/fi';
import { IoArrowForward } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';

const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const CourseCard = ({image,slug,badge,title,des,date,enroll}) => {


  return (

            <div  className="rounded-xl bg-white relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg     ">
                 <div className="h-[250px] overflow-hidden  ">
   
                 <Image
                   src={image}
                   alt={title}
                   width={500}
                   height={600}
                   className="h-full object-cover transform transition-all duration-300 group-hover:scale-105 ease-in-out "
                 />
                 </div>
                 <span className="bg-[#B12531] text-white px-3 py-1 rounded-full text-xs absolute top-4 left-3  ">
                   {badge}
                 </span>
                 {/* course content */}
                 <div
                   className={`${roboto.className} flex flex-col gap-3 px-7 py-6`}
                 >
                   <h1
                     className={`${meriweather.className} text-[#3D3029] text-xl group-hover:text-[#B12531] transition-colors duration-300 ease-in-out`}
                   >
                     {title}
                   </h1>
                   <p className="text-[#4A4E6A] text-sm">{des}</p>
                   <span className="bg-[#F4F2ED] h-0.5 w-full rounded-full"></span>
                   <div className="flex gap-6 ">
                   <div className="flex items-center gap-2 text-[#676F7E] text-sm">
                     <FiClock className="text-base" />
                     <span>{date}</span>
                   </div>
                   <div className="flex items-center gap-3 text-[#676F7E] text-sm">
                     <LuUsers className="text-base" />
   
                     <span>{enroll}</span>
                   </div>
                   </div>
                   <Link href={`/courses/${slug}`} className="text-[#B12531] flex gap-2 items-center text-sm mt-3 font-semibold">
                   View Details
                   <IoArrowForward  />
   
                   </Link>
                 </div>
               </div>
       
  )
}

export default CourseCard