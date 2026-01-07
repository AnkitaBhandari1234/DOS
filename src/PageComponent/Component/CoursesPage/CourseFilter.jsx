import { Quicksand } from 'next/font/google';
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5';
const quicksand= Quicksand({
  weight:'500',
  
  
})

const CourseFilter = () => {
    const categories = ["All", "Analytics", "Marketing", "Management", "Technology", "Finance"];
  return (
   <section className="py-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">

    {/* Categories */}
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {categories.map((cat, i) => (
        <span
          key={i}
          className={`${quicksand.className} px-4 py-2 rounded-full text-sm cursor-pointer transition
            ${
              cat === "All"
                ? "bg-[#B12531] text-white"
                : "bg-[#EFE2DE] text-[#B12531] hover:bg-[#B12531] hover:text-white"
            }`}
        >
          {cat}
        </span>
      ))}
    </div>

    {/* Search Bar */}
    <div className="w-full md:w-[280px] relative">
  {/* Search Icon */}
  <IoSearchSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B12531] text-lg" />

  {/* Input */}
  <input
    type="text"
    placeholder="Search courses..."
    className="w-full bg-[#F2F0ED] border border-[#B12531] rounded-full
               pl-11 pr-4 py-2 text-sm text-[#3D3029]
               focus:outline-none focus:ring-2 focus:ring-[#B12531]/30"
  />
</div>


  </div>
</section>

  )
}

export default CourseFilter