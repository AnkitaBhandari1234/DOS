import { Poppins, Quicksand, Roboto } from 'next/font/google'
import React from 'react'
const quicksand= Quicksand({
  weight:'500',
  
  
})


const GalleryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const category=[
            "All",
            "Classroom",
            "Workshop",
            "Event",
            "Projects",
            "Achievements",
            "Infrastructure",
          ]
  return (
         <section className="py-10">
        <div className="flex flex-wrap justify-center gap-4">
         {category.map((cat, i) => (
      <span
        key={i}
        onClick={() => setSelectedCategory(cat)}
        className={`${quicksand.className} px-4 py-2 rounded-full text-sm cursor-pointer ${
         selectedCategory === cat
            ? "bg-[#B12531] text-white"
            : "bg-[#EFE2DE] text-[#B12531]"
        }`}
      >
        {cat}
      </span>
    ))}
        </div>
      </section>

  )
}

export default GalleryFilter