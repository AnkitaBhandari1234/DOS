import { Quicksand } from 'next/font/google';
import React from 'react'
const quicksand = Quicksand({
  weight: "600",
});


const BlogFilter = () => {
    const categories = ["All", "Web Development", "Design", "Marketing"];
  return (
  <section className="bg-white px-6 lg:px-14 py-10 border-b border-[#E6E6F0]">
  <div className="flex flex-wrap gap-4 justify-center">
    {categories.map((cat, i) => (
      <span
        key={i}
        className={`${quicksand.className} px-4 py-2 rounded-full text-sm cursor-pointer ${
          cat === "All"
            ? "bg-[#524dd3] text-white"
            : "bg-[#524dd3]/10 text-[#524dd3]"
        }`}
      >
        {cat}
      </span>
    ))}
  </div>
</section>


  )
}

export default BlogFilter