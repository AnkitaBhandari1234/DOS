import React from "react";
import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  weight: "700",
});

const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const BlogHeader = () => {
  return (
    <section className="relative w-full h-[650px]">
      {/* Background Image */}
      <Image src="/blogbg.jpg" fill className="object-cover" alt="Blog BG" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header Content */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-center justify-center h-full gap-6">
        {/* Capsule Label */}
        <span className="bg-[#524dd3]/80 text-white uppercase text-sm sm:text-base tracking-wide px-4 py-1.5 rounded-full">
          Our Blog
        </span>

        {/* Heading */}
        <h1
          className={`${meriweather.className} text-4xl sm:text-5xl md:text-6xl leading-tight text-white text-center`}
        >
          Actionable Tech Insights
        </h1>

        {/* Paragraph */}
        <p
          className={`${roboto.className} text-base sm:text-lg md:text-xl text-white/80 text-center max-w-3xl`}
        >
          Practical tutorials, proven best practices, and industry knowledge you
          can apply with confidence.
        </p>
      </div>
    </section>
  );
};

export default BlogHeader;
