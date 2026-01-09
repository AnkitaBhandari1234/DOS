import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { LuCalendar } from "react-icons/lu";

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });



const FeaturedBlog = ({ blog }) => {
 
    if (!blog) return null;


  return (
    <section className="bg-[#FBFAF9] px-6 lg:px-14 py-20">
      <div className="mb-14 text-center">
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-7 py-2 w-fit tracking-wider `}
        >
         featured article
        </span>
        <h2 className={`text-[#1D1A34] text-5xl font-bold tracking-wide ${merriweather.className} mt-8`}>Latest Insights</h2>
        <p className={`text-[#6E6B8F] mt-2 ${roboto.className}`}>Hand-picked blogs curated by our instructors.</p>
      </div>

      <div className={`${roboto.className} relative h-[450px] group overflow-hidden rounded-2xl  `}>
        <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out  overflow-hidden ">
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#262626,#26262650)]  backdrop-blur-[1px]  "></div>

        <Image src={blog.image} alt="" width={600} height={700} className="w-full h-[450px] object-cover  "/>
        </div>
        {/* text */}
        <div className="absolute bottom-7 left-8 flex flex-col gap-4   ">
        
          <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base    text-[#B12531] rounded-full px-5 py-1.5 w-fit  `}
        >
          {blog.category}
        </span>
         <h2 className={`text-4xl text-white  ${merriweather.className} `}>{blog.title}
      
    </h2>
    <p className="text-[#D8D7D6] max-w-2xl">{blog.description}</p>
    <p className="text-[#D8D7D6] flex items-center gap-3">
      <LuCalendar className="" />
      January 3,2026

    </p>
</div>
        
      </div>
    </section>
  );
};

export default FeaturedBlog;
