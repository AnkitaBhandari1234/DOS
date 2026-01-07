import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const quicksand = Quicksand({
  weight: "700",
});

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
  bgImage = "/blogbg.jpg", // default image
}) => {
  return (
     <section className="relative w-full h-[450px]">
          {/* Background Image */}
          <Image src={bgImage} fill className="object-cover" alt="Blog BG" />
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
    
          {/* Header Content */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-center justify-center h-full gap-4">
            {/* Capsule Label */}
          
    <span className={`bg-[#B12531]/40 text-white px-10 py-1.5 rounded-full backdrop-blur-lg border border-[#B12531]/30 font-medium ${roboto.className} tracking-wider uppercase  `}>{label}</span>
   
    
            {/* Heading */}
            <h1
              className={`${meriweather.className} text-4xl sm:text-5xl md:text-6xl leading-tight text-white text-center`}
            >
              {title} <span className="text-[#B12531]"> {highlight}</span>
            </h1>
    
            {/* Paragraph */}
            <p
              className={`${roboto.className} text-base sm:text-lg md:text-xl text-white/80 text-center max-w-3xl`}
            >{subtitle}
            </p>
          </div>
        </section>
  )
}

export default Banner