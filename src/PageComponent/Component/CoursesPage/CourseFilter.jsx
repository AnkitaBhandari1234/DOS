
import { Quicksand } from 'next/font/google';
import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5';
const quicksand= Quicksand({
  weight:'500',
  
  
})

const CourseFilter = ({searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,}) => {

    const categories = ["All", "Analytics", "Marketing", "Management", "Technology", "Finance"];
  return (
   <section className="py-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-40 md:items-center  ">

    {/* Categories */}
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {categories.map((cat, i) => (
        <span
          key={i}
          onClick={()=>setSelectedCategory(cat)}
          className={`${quicksand.className} px-4 py-2 rounded-full text-sm cursor-pointer transition
            ${
              selectedCategory === cat
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
  <IoSearchSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B12531]/80 text-lg" />

  {/* Input */}
  <input
    type="text"
    placeholder="Search courses..."
      value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full bg-[#F2F0ED] border border-[#B12531]/50 rounded-full placeholder:text-[#3D3029]
               pl-11 pr-4 py-2 text-sm text-[#3D3029]
               focus:outline-none focus:ring-2 focus:ring-[#B12531]/30"
  />
</div>


  </div>
</section>

  )
}

export default CourseFilter