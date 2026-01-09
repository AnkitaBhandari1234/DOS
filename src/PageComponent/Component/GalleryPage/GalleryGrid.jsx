import { Poppins, Quicksand, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const quicksand= Quicksand({
  weight:'500',
  
  
})
const roboto=Roboto({})



const GalleryGrid = ({images}) => {
//     const galleryImages = [
//   {
//     id: 1,
//     src: "/gallery1.jpg",
//     title: "Frontend Live Class",
//     category: "Classroom",
//   },
//   {
//     id: 2,
//     src: "/gallery6.jpg",
//     title: "MERN Stack Workshop",
//     category: "Workshop",
//   },
//   {
//     id: 3,
//     src: "/gallery3.jpg",
//     title: "Tech Fest 2025",
//     category: "Event",
//   },
//   {
//     id: 4,
//     src: "/gallery4.jpg",
//     title: "Student Project Demo",
//     category: "Projects",
//   },
//   {
//     id: 5,
//     src: "/gallery5.jpg",
//     title: "Certification Ceremony",
//     category: "Achievements",
//   },
//   {
//     id: 6,
//     src: "/gallery6.jpg",
//     title: "Institute Infrastructure",
//     category: "Infrastructure",
//   },
// ];

  return (
          <section className="px-6 lg:px-14 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={400}
                className="object-cover w-full h-[260px] group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
                <p
                  className={`${quicksand.className} text-white text-lg`}
                >
                  {img.title}
                </p>
                <span
                  className={`${roboto.className} text-sm text-white/70`}
                >
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </section>

  )
}

export default GalleryGrid