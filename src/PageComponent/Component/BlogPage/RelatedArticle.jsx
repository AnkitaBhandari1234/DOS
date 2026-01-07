import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { LuCalendar, LuClock3 } from 'react-icons/lu';
const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const RelatedArticle = () => {
     const allBlogs = [
  {
    id: 1,
    slug: "javascript-basics",
    title: "Career Opportunities in South Korea for Nepali Workers",
    category: "Career Guide",
    description: "Explore the growing demand for skilled workers in South Korea and how to prepare for overseas employment.",
    time:'8 min',
    image: "/feature1.jpg",
  },
  {
    id: 2,
    slug: "javascript-basics",
    title: "Career Opportunities in South Korea for Nepali Workers",
    category: "Career Guide",
    description: "Explore the growing demand for skilled workers in South Korea and how to prepare for overseas employment.",
    date:'December 28, 2025',
    image: "/feature2.jpg",
  },
  {
    id: 3,
    slug: "frontend-roadmap-2026",
    title: "Frontend Developer Roadmap 2026",
    category: "Web Development",
    description: "Step-by-step roadmap for beginners.",
    image: "/feature4.jpg",
  },
  // add slug for all
];
  return (
   <section className="bg-[#F2F0ED] px-6 lg:px-16 py-20">
      <div className="mb-14 text-center">
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-7 py-2 w-fit tracking-wider `}
        >
        keep learning
        </span>
         <h1 className={`${meriweather.className} mt-8 text-4xl text-[#3D3029] tracking-wide`}>
         Related Articles
        </h1>
        <p className={`text-[#6E6B8F] mt-4 ${roboto.className}`}>
  Explore more insights about Korean language learning and culture.<br/>
  Gain practical skills in languages, accounting, and IT with DOS Multi Services Pvt. Ltd.
</p>
        
        
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {allBlogs.map((blog) => (
            <Link
            href={`/blogs/${blog.slug}`}
              key={blog.id}
              className=" block relative bg-white rounded-xl overflow-hidden border-transparent hover:border  hover:border-[#B12531] hover:-translate-y-2 transition-all duration-300 ease-in-out group"
            >
            <div className="overflow-hidden h-[200px]">
  <Image
    src={blog.image}
    alt=""
    width={200}
    height={500}
    className="object-cover h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
  />
</div>
              
              <div className="p-6">
                <div className='flex items-center gap-4'>

                <span className={`text-xs  ${roboto.className}  bg-[#EFE2DE] text-[#B12531] px-4 py-1.5 rounded-3xl`}>{blog.category}</span>
                
                <span className={`${roboto.className} text-[#767676] flex items-center gap-2 text-sm`}> <LuClock3 className='text-base' />{blog.time}</span>
                </div>
                <h4 className={`text-[#262626] text-lg font-semibold mt-2 ${meriweather.className} group-hover:text-[#B12531] transition-colors duration-300 ease-in-out`}>{blog.title}</h4>
                <p className={`text-[#767676] text-sm mt-2  line-clamp-2`}>{blog.description}</p>
                
              </div>
            </Link>
          ))}
        </div>
      </section>
  )
}

export default RelatedArticle