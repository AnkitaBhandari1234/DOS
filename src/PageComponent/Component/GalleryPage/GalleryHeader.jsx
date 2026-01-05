import { Merriweather, Quicksand, Roboto } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const quicksand=Quicksand({
  weight:'700'
})
 
const roboto= Roboto({
  weight:'400'

})
const meriweather =Merriweather({
  weight:'700'
})


const GalleryHeader = () => {
  return (
         <section className="relative h-[60vh] flex items-center justify-center">
       <Image
  src="/gallerybg.jpg"
  alt="Gallery Hero"
  fill
  className="object-cover"
/>
 <div className="bg-[#0F172A]/40  absolute inset-0"></div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center text-white px-6">
          <h1
            className={`${meriweather.className} text-4xl lg:text-5xl`}
          >
            Life at Our Institute
          </h1>
          <p
            className={`${roboto.className} mt-4 max-w-xl mx-auto text-lg text-white/80`}
          >
            Explore classrooms, workshops, events, and student achievements
          </p>
        </div>
      </section>

  )
}

export default GalleryHeader