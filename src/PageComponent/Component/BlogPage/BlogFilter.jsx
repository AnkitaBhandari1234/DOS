import { Quicksand } from "next/font/google";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const quicksand = Quicksand({
  weight: "600",
});

const BlogFilter = ({ selectedCategory, setSelectedCategory,searchTerm, setSearchTerm }) => {
  const categories = [
    "All",
    "Web Development",
    "Design",
    "Marketing",
    "Career Guide",
  ];
  return (
    <section className="bg-white px-6 lg:px-14 py-10 border-b border-[#EFE2DE] flex justify-between">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((cat, i) => (
          <span
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`${
              quicksand.className
            } px-4 py-2 rounded-full text-sm cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#B12531] text-white"
                : "bg-[#EFE2DE] text-[#B12531]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>
       {/* Search bar */}
      
         <div className="w-full md:w-[280px] relative">
        {/* Search Icon */}
        <IoSearchSharp className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B12531]/80 text-lg" />
      
        {/* Input */}
        <input
          type="text"
          placeholder="Search blogs..."
            value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#F2F0ED] border border-[#B12531]/50 rounded-full placeholder:text-[#3D3029]
                     pl-11 pr-4 py-2 text-sm text-[#3D3029]
                     focus:outline-none focus:ring-2 focus:ring-[#B12531]/30"
        />
      </div>
      
    </section>
  );
};

export default BlogFilter;
