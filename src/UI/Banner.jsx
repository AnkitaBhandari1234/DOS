import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';

import React from 'react'


const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const Banner = ({
  title, 
  subtitle, 
  label = "Blog", 
  highlight = "", 
  bgImage = "/blogbg.jpg", 
  meta,       
    
}) => {
  return (
   <section className="relative w-full h-[450px]">
  {/* Background Image */}
  <Image
    src={bgImage}
    fill
    className="object-cover"
    alt={`${label} Background`}
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  

  {/* Content */}
  <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-center justify-center gap-4 text-center mt-15">
    {/* Label */}
    <span
      className={`bg-[#B12531]/40 text-white px-10 py-1.5 rounded-full backdrop-blur-lg border border-[#B12531]/30 font-medium tracking-wider uppercase ${roboto.className}`}
    >
      {label}
    </span>

    {/* Title */}
    <h1
      className={`${meriweather.className} text-4xl sm:text-5xl md:text-5xl leading-tight text-white`}
    >
      {title} <span className="text-[#B12531]">{highlight}</span>
    </h1>

    {/* Subtitle */}
    <p
      className={`${roboto.className} text-base sm:text-lg md:text-xl text-white/80 max-w-3xl`}
    >
      {subtitle}
    </p>

    {meta && (
      <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm mt-2">
        {meta}
      </div>
    )}
  </div>
</section>

  )
}

export default Banner