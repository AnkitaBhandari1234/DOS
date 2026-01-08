import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import courseData from "../Component/Data/CourseData";
import { FiClock } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import {  LuUsers } from "react-icons/lu";


import CourseCard from "../Component/CoursesPage/CourseCard";
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const Course = () => {
 

  return (
    <section className="bg-[#F4F2ED] text-[#E3E0FF] py-16 px-16 flex flex-col  items-center">
      {/* text */}
      <div className="text-center flex flex-col gap-3 items-center  w-7/12">
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-5 py-2 w-fit `}
        >
          Career-Ready IT Training
        </span>
        <h1 className={`${meriweather.className} mt-5 text-4xl text-[#3D3029]`}>
          Featured Courses
        </h1>
        <p
          className={`${roboto.className} text-[#4A4E6A] text-base leading-5 `}
        >
          Explore industry-focused, practical training programs designed to
          help you build real skills and launch a successful career in tech.
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-10 max-w-6xl">
          {courseData.map((course, i) => (
            
            <CourseCard key={i} {...course} />
          ))}
        </div>

      <Link href='/courses' className="text-[#B12531] font-semibold flex items-center gap-3 capitalize border-2 border-[#B12531] rounded-xl px-6 py-2 mt-10 hover:text-white hover:bg-[#B12531] transition-all duration-200 ease-in-out ">
      view all courses
      <IoArrowForward className="text-xl "  />
      </Link>
    </section>
  );
};

export default Course;
