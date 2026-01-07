import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { LuCalendar } from "react-icons/lu";

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const featuredBlogs = [
  {
    id: 1,
    title: "Frontend Developer Roadmap for Beginners",
    category: "Web Development",
    image: "/feature1.jpg",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    description:
      "A complete beginner-friendly roadmap to become a frontend developer using HTML, CSS, JavaScript, and React.",
  },
  {
    id: 2,
    title: "How to Choose the Right IT Career Path",
    category: "Career",
    image: "/feature2.jpg",
    date: "Jan 2, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Top Skills Every IT Student Must Learn in 2026",
    category: "Technology",
    image: "/feature3.jpg",
    date: "Dec 28, 2025",
    readTime: "5 min read",
  },
];

const FeaturedBlog = () => {
  const [bigBlog, ...smallBlogs] = featuredBlogs; // split first blog as big, rest as small

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

        <Image src='/feature2.jpg' alt="" width={600} height={700} className="w-full h-[450px] object-cover  "/>
        </div>
        {/* text */}
        <div className="absolute bottom-7 left-8 flex flex-col gap-4   ">
        
          <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base    text-[#B12531] rounded-full px-5 py-1.5 w-fit  `}
        >
          Study Tips
        </span>
         <h2 className={`text-4xl text-white  ${merriweather.className} `}>10 Essential Tips for EPS-TOPIK Success in 2026
      
    </h2>
    <p className="text-[#D8D7D6] max-w-2xl">Master the Korean language proficiency test with these proven strategies from our expert instructors. Learn how to prepare effectively and achieve your target score.</p>
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
