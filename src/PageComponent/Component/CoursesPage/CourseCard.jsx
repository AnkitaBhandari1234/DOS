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

const CourseCard = () => {
     const course = [
    {
      image: "/course1.jpg",
      badge: "Begineer",
      title: "Korean Language Basics",
      des: "Start your Korean journey with Hangul, basic grammar, and essential vocabulary.",
      date: "3 Months",
      enroll: "200+",
    },
    {
      image: "/course2.jpg",
      badge: "Intermediate",
      title: "TOPIK I & II Preparation",
      des: "Comprehensive preparation for TOPIK exams with mock tests and personalized feedback.",
      date: "6 Months",
      enroll: "150+",
    },
    {
      image: "/course3.jpg",
      badge: "All Levels",
      title: "EPS-TOPIK Training",
      des: "Specialized training for Employment Permit System Korean language test.",
      date: "4 Months",
      enroll: "300+",
    },
  ];
  return (
   <div className="grid grid-cols-3 gap-7 mt-20 w-full   ">
           {course.map((val, i) => {
             return (
               <div key={i} className="rounded-xl bg-white relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg   ">
                 <div className="h-[250px] overflow-hidden  ">
   
                 <Image
                   src={val.image}
                   alt={val.title}
                   width={500}
                   height={600}
                   className="transform transition-all duration-300 group-hover:scale-105 ease-in-out "
                 />
                 </div>
                 <span className="bg-[#B12531] text-white px-3 py-1 rounded-full text-xs absolute top-4 left-3  ">
                   {val.badge}
                 </span>
                 {/* course content */}
                 <div
                   className={`${roboto.className} flex flex-col gap-3 px-7 py-6`}
                 >
                   <h1
                     className={`${meriweather.className} text-[#3D3029] text-xl group-hover:text-[#B12531] transition-colors duration-300 ease-in-out`}
                   >
                     {val.title}
                   </h1>
                   <p className="text-[#4A4E6A] text-sm">{val.des}</p>
                   <span className="bg-[#F4F2ED] h-0.5 w-full rounded-full"></span>
                   <div className="flex gap-6 ">
                   <div className="flex items-center gap-2 text-[#676F7E] text-sm">
                     <FiClock className="text-base" />
                     <span>{val.date}</span>
                   </div>
                   <div className="flex items-center gap-3 text-[#676F7E] text-sm">
                     <LuUsers className="text-base" />
   
                     <span>{val.enroll}</span>
                   </div>
                   </div>
                   <Link href='/course' className="text-[#B12531] flex gap-2 items-center text-sm mt-3 font-semibold">
                   View Details
                   <IoArrowForward  />
   
                   </Link>
                 </div>
               </div>
             );
           })}
         </div>
  )
}

export default CourseCard