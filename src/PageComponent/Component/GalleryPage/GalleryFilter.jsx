import { Poppins, Quicksand, Roboto } from 'next/font/google'
import React from 'react'
const quicksand= Quicksand({
  weight:'500',
  
  
})


const GalleryFilter = () => {
  return (
         <section className="py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "All",
            "Classroom",
            "Workshop",
            "Event",
            "Projects",
            "Achievements",
            "Infrastructure",
          ].map((cat, i) => (
            <button
              key={i}
              className={`${quicksand.className} px-6 py-2 rounded-full border border-gray-300 text-sm hover:bg-[#524dd3] hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

  )
}

export default GalleryFilter