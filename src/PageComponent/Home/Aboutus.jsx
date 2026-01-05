import { Merriweather, Quicksand, Roboto } from "next/font/google";
import React from "react";
import { LuCodeXml, LuRocket } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
import teachingImg from "../../../public/about1.webp";
import codingImg from "../../../public/about2.jpg";
import Image from "next/image";
import {
  FaBriefcase,
  FaLaptopCode,
  FaLayerGroup,
  FaUserTie,
} from "react-icons/fa";

const quicksand = Quicksand({
  weight: "700",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const Aboutus = () => {
  const about = [
    { title: "Expert Mentors", icon: <FaUserTie /> },
    { title: "Hands-on Projects", icon: <FaLaptopCode /> },
    { title: "Career Support", icon: <FaBriefcase /> },
    { title: "Industry Training", icon: <FaLayerGroup /> },
  ];
  return (
    <section className="">
      <div className="bg-[#F5F6FA] py-16 px-14 flex gap-20  ">
        {/* text */}
        <div className="w-[45%]  ">
          <span
            className={`  text-sm text-[#524DD3] uppercase ${quicksand.className}`}
          >
            Discover Our Story
          </span>
          <h1
            className={` mt-2 text-4xl font-medium text-black ${meriweather.className}`}
          >
            Innovating IT Education for a Smarter Tomorrow
          </h1>
          <p
            className={` mt-4 w-fit text-[#4A4E6A]  leading-snug ${roboto.className}`}
          >
            “Our mission is to empower learners with practical IT skills,
            real-world projects, and hands-on mentorship. We combine expert
            guidance with industry-focused training to help students build
            successful tech careers.”
          </p>
          {/* card */}
         <div className="grid grid-cols-2 gap-5 w-[90%] mt-8">
  {about.map((val, i) => (
    <div
      key={i}
      className="flex items-center gap-4 bg-[#F9F9FF] p-5 border border-[#E3E0FF]
      rounded-xl shadow-sm hover:shadow-[0_4px_20px_rgba(82,77,211,0.4)] transition-all duration-400 ease-in-out"
    >
      <div className="text-3xl text-[#524DD3]">
        {val.icon}
      </div>

      <h1 className="text-lg font-medium text-[#1E1B3C] capitalize">
        {val.title}
      </h1>
    </div>
  ))}
</div>

        </div>
        {/* image */}
        <div className="w-[55%] relative mt-10 h-[500px] ">
          <div className="z-20 w-full h-[420px] ">
            <Image
              src={teachingImg}
              alt="teaching"
              width={500}
              height={800}
              className="w-full h-full object-cover border-5 border-gray-300 rounded-lg shadow-[0_4px_20px_rgba(82,77,211,0.7)]"
            />
          </div>
          <div className="absolute bottom-14 -left-13 w-[53%] h-[300px]  ">
            <Image
              src={codingImg}
              alt=""
              width={300}
              height={200}
              className=" h-full w-full object-cover border-5 border-gray-300 rounded-lg shadow-[0_4px_20px_rgba(82,77,211,0.5)]"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
