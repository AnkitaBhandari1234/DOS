import { Merriweather, Quicksand, Roboto } from "next/font/google";
import React from "react";
import { LuCodeXml, LuRocket, LuTarget, LuUsers } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
import teachingImg from "../../../public/about1.webp";
import codingImg from "../../../public/about2.jpg";
import Image from "next/image";
import { FiAward, FiBookOpen } from "react-icons/fi";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";


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
    { 
      icon:<LuTarget />,

      title: "Focused Curriculum",
      desc: "Structured learning paths designed for TOPIK success",
     },
    {
      icon: <LuUsers />,
      title: "Expert Instructors",
      desc: "Native speakers and certified Korean language teachers",
    },
    {
      icon: <FiBookOpen />
,
      title: "Rich Resources",
      desc: "Comprehensive study materials and practice tests",
    },
    {
      icon: <FiAward />,
      title: "Proven Results",
      desc: "95% of our students pass their target exams",
    },
  ];
  return (
   <section className="bg-[#FAF8F5] py-20 px-14 flex flex-col lg:flex-row gap-20">

  {/* Left Column */}
  <div className={`w-full lg:w-[50%] flex flex-col ${roboto.className}`}>
    {/* Badge */}
    <span
      className={`text-sm text-[#B12531] uppercase ${quicksand.className} bg-[#EFE2DE] w-fit px-5 py-2 rounded-full`}
    >
      Discover our story
    </span>

    {/* Heading */}
    <h1 className={`mt-6 text-4xl font-medium text-[#3D3029] leading-snug ${meriweather.className}`}>
      Shaping Futures Through <span className="text-[#B12531]">Excellence</span>
    </h1>

    {/* Paragraphs */}
    <p className={`mt-4 text-[#4A4E6A] leading-snug ${roboto.className}`}>
      DOS Multi Services Pvt. Ltd. is a trusted center for languages, professional accounting, and IT training, helping students gain practical skills for global careers.
    </p>
    <p className={`mt-3 text-[#4A4E6A] leading-snug ${roboto.className}`}>
   We offer programs in Korean, Japanese, and German languages, professional accounting, and IT courses like Graphic Design, Frontend, Backend, and Full Stack Development with hands-on guidance from experienced instructors.
    </p>

    {/* Cards 2x2 Grid */}
    <div className="grid grid-cols-2 gap-8 mt-8">
      {
        about.map((val,i)=>{
          return(
            <div key={i} className="flex  gap-4">
              <div className="bg-[#F3E3E1] px-3 py-3 rounded-xl h-fit ">
              <span className="  text-[#B12531] text-2xl">{val.icon}</span>
                </div>
              <div>
                <h3 className={`text-[#2B303B] ${meriweather.className} `}>{val.title}</h3>
                <p className={`text-[#676F7E] text-sm`}>{val.desc}</p>
                </div>
              </div>
          )
        })
      }

    </div>
   <Link
        href="/about"
        className="bg-[#B12531] flex items-center gap-3 text-white w-fit mt-7  px-8 py-3 rounded-full
        hover:bg-[#8F1F28] tracking-wide
        transition-all duration-300"
      >
        Learn More
        <IoArrowForward className="text-xl" />

      </Link>
   

  </div>

  {/* Right Column - Images */}
  <div className="w-full lg:w-[50%] relative mt-10 lg:mt-5">
    <div className="z-20 w-full h-[420px]">
      <Image
        src={teachingImg}
        alt="Teaching"
        width={500}
        height={800}
        className="w-full h-full object-cover rounded-lg shadow-[0_4px_20px_rgba(177,37,49,0.5)] border-4 border-gray-300"
      />
    </div>
    <div className="absolute bottom-0 -left-5 w-[53%] h-[250px]">
      <Image
        src={codingImg}
        alt="Coding"
        width={300}
        height={200}
        className="w-full h-full object-cover rounded-lg shadow-[0_4px_20px_rgba(177,37,49,0.5)] border-4 border-gray-300"
      />
    </div>
  </div>

</section>

  );
};

export default Aboutus;
