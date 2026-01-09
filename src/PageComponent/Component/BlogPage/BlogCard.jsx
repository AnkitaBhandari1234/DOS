import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { LuCalendar } from 'react-icons/lu';
const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const BlogCard = ({ blogs }) => {
 const allBlogs = [
  {
    id: 1,
    slug: "javascript-basics",
    title: "Career Opportunities in South Korea for Nepali Workers",
    category: "Career Guide",
    description: "Explore the growing demand for skilled workers in South Korea and how to prepare for overseas employment.",
    date:'December 28, 2025',
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
         recent articles
        </span>
        
        <p className={`text-[#6E6B8F] mt-8 ${roboto.className}`}>Stay informed with the latest insights from our experts</p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((blog) => (
            <Link
            href={`/blogs/${blog.slug}`}
              key={blog.id}
              className="relative bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(177,37,49,0.2)] hover:-translate-y-2 transition group"
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
              <span className={`text-xs  ${roboto.className} absolute top-3 left-3 bg-[#B12531] text-white px-4 py-1.5 rounded-3xl`}>{blog.category}</span>
              <div className="p-6">
                
                <span className={`${roboto.className} text-[#767676] flex items-center gap-3 text-sm`}> <LuCalendar className='text-base' />{blog.date}</span>
                <h4 className={`text-[#262626] text-lg font-semibold mt-2 ${merriweather.className} group-hover:text-[#B12531] transition-colors duration-300 ease-in-out`}>{blog.title}</h4>
                <p className={`text-[#767676] text-sm mt-2 ${quicksand.className} line-clamp-2`}>{blog.description}</p>
                <p className='flex items-center gap-1 font-semibold text-[#B12531] mt-4'>Read More <IoArrowForward className='group-hover:translate-x-1.5 transition-all duration-500 ease-in-out'  /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
  )
}

export default BlogCard