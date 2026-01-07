import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";
import { LuCalendar, LuUsers } from "react-icons/lu";
const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const meriweather = Merriweather({ weight: "700" });

const EventCard = ({image,badge,title,des,date,time,location,enroll}) => {
//   const events = [
//     {
//       image: "/course1.jpg",
//       badge: "Conference",
//       title: "Annual Education Conference 2024",
//       des: "Join industry leaders and educators for insights on the future of education and technology in learning.",
//       date: "March 15, 2024",
//       time: "9:00 AM - 5:00 PM",
//       location: "DOS Main Auditorium",

//       enroll: "500+ Expected",
//     },
//     {
//       image: "/course2.jpg",
//       badge: "Ceremony",
//       title: "Graduation Ceremony",
//       des: "Celebrating the achievements of our 2024 graduating class. Join us for this milestone event.",
//       date: "April 20, 2024",
//       time: "10:00 AM - 1:00 PM",
//       location: "DOS Campus Ground",

//       enroll: "1000+ Expected",
//     },
//     {
//       image: "/course3.jpg",
//       badge: "Workshop",
//       title: "Digital Marketing Workshop",
//       des: "Hands-on workshop covering SEO, social media marketing, and content strategy fundamentals.",
//       date: "March 15, 2024",
//       time: "9:00 AM - 5:00 PM",
//       location: "Training Room 2",

//       enroll: "50+ Expected",
//     },
//   ];
  return (

      <div
           
            className="rounded-xl bg-white relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
          >
            {/* Image Container */}
            <div className="relative h-[250px] overflow-hidden">
              {/* Image */}
              <Image
                src={image}
                alt={title}
                width={500}
                height={600}
                className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

              {/* Date */}
              <span
                className={`absolute bottom-3 left-4 flex items-center gap-2 text-white z-20 ${roboto.className}`}
              >
                <LuCalendar /> {date}
              </span>

              {/* Badge */}
              <span className="absolute top-4 left-3 bg-[#B12531] text-white px-3 py-1 rounded-full text-xs z-20">
                {badge}
              </span>
            </div>

            {/* Content */}
            <div
              className={`${roboto.className} flex flex-col gap-3 px-5 py-6`}
            >
              <h1
                className={`${meriweather.className} text-[#3D3029] text-xl group-hover:text-[#B12531] transition-colors duration-300 ease-in-out`}
              >
                {title}
              </h1>

              <p className="text-[#4A4E6A] text-sm line-clamp-2">{des}</p>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#676F7E] text-sm">
                  <FiClock className="text-lg text-[#B12531]" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-[#676F7E] text-sm">
                  <GrLocation className="text-lg text-[#B12531]" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-3 text-[#676F7E] text-sm">
                  <LuUsers className="text-lg text-[#B12531]" />
                  <span>{enroll}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className={`text-white bg-[#B12531] rounded-xl py-2.5 flex gap-2 items-center justify-center text-base mt-3 ${roboto.className}`}
              >
                Register Now <IoArrowForward />
              </Link>
            </div>
          </div>
   
  );
};

export default EventCard;
