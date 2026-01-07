import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
const quicksand = Quicksand({
  weight: "700",
});

const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const BlogDetailHeader = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <Image src="/blogbg.jpg" fill className="object-cover" alt="Blog BG" />

      {/* Overlay */}
      <div className=" absolute inset-0 bg-[linear-gradient(to_top,#262626,#26262660)]  backdrop-blur-[1px]"></div>

      {/* Header Content */}
      <div className={`absolute inset-0 max-w-6xl  px-5 md:px-40 mt-16 flex flex-col   justify-center h-full gap-3  ${roboto.className} text-lg `}>
        <Link href='/blogs' className="flex gap-2 items-center  w-fit text-[#E0DFDB] hover:text-[#B12531] transition-colors duration-100 ease-in-out">
        <IoArrowBackOutline />
        Back to Blogs

        </Link>
        {/* Capsule Label */}
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-7 py-1 w-fit   `}
        >
          Study Tips
        </span>

        {/* Heading */}
        <h1
          className={`${meriweather.className} text-5xl sm:text-5xl md:text-5xl leading-snug text-white `}
        >
          10 Essential Tips for EPS-TOPIK Success in 2026
        </h1>
        <div className="flex gap-8 text-[#C2C1C0] ">
        
          <span className="flex gap-2 items-center">
            <FiUser />
            Ms. Sunita Tamang
          </span>
       
        
          <span className="flex gap-2 items-center">
            <AiOutlineCalendar />

            January 3,2026
          </span>
        
        <span>8 min read</span>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHeader;
