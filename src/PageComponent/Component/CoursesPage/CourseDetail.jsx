"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/UI/Banner";
import { useState } from "react";

import { IoChevronDown } from "react-icons/io5";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

import { Quicksand, Roboto, Merriweather } from "next/font/google";
import { LuTarget } from "react-icons/lu";
import { IoMdArrowBack } from "react-icons/io";

// Fonts
const quicksand = Quicksand({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });

const CourseDetail = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleModule = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!course) return null;

  return (
    <div>
      {/* Banner */}
      <Banner
        title={course.title}
        subtitle={course.des}
        highlight={course.duration}
        label="Course"
        bgImage={course.image}
        meta={
          <>
            <span className="flex items-center gap-2 text-lg font-semibold">
              <FaCalendarAlt /> {course.duration}
            </span>
            <span className="flex items-center gap-2 text-lg font-semibold">
              <FaMapMarkerAlt /> On Campus
            </span>
            <span className="flex items-center gap-2 text-lg font-semibold">
              <FaUser /> {course.students}+ Students
            </span>
          </>
        }
      />

      {/* Content */}
      <section className="py-20 md:py-28 bg-background bg-[#FAF8F5]">
        <div className={`container mx-auto px-4 lg:px-16 ${roboto.className}`}>
          <Link
            href="/courses"
            className="flex items-center gap-2 text-lg font-semibold mb-5 hover:text-[#B12531] transition-colors duration-300 ease-in-out w-fit"
          >
            <IoMdArrowBack className="text-lg" />
            Back to Courses
          </Link>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-4`}
                >
                  Course Overview
                </h2>
                <p className={` leading-relaxed ${roboto.className}`}>
                  {course.overview}
                </p>
              </div>

              {/* Syllabus */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-6`}
                >
                  Course Syllabus
                </h2>

                <div className="space-y-4 ">
                  {course.syllabus.map((module, index) => (
                    <div key={index} className="bg-card rounded-xl p-5 shadow mb-6 ">
                      <button
                        onClick={() => toggleModule(index)}
                        className="w-full flex  items-center justify-between   cursor-pointer"
                      >
                        <h3
                          className={`${merriweather.className} text-lg font-semibold mb-3`}
                        >
                          {module.title}
                        </h3>
                        <IoChevronDown
                          className={`text-xl transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`px-6 transition-all duration-300 overflow-hidden ${
                          openIndex === index ? "max-h-[500px] pb-6" : "max-h-0"
                        }`}
                      >
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2 ">
                              <FaCheckCircle className="text-[#B12531]" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-6`}
                >
                  What You’ll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.outcomes.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-secondary/50 p-4 rounded-lg"
                    >
                      <LuTarget className="text-lg text-[#B12531]" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-6`}
                >
                  Tools & Resources
                </h2>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool, i) => (
                    <span
                      key={i}
                      className={`px-3.5 py-1.5 text-[#B12531] bg-[#F3E3E1]  rounded-full  ${quicksand.className}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-6`}
                >
                  Your Instructor
                </h2>

                <div className="bg-card p-6 rounded-xl shadow flex gap-6">
                  <Image
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    width={56}
                    height={46}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div>
                    <h3
                      className={`${merriweather.className} text-xl font-semibold`}
                    >
                      {course.instructor.name}
                    </h3>
                    <p className="text-primary text-xs text-[#B12531] font-semibold mb-2">
                      {course.instructor.role}
                    </p>
                    <p className="text-sm">{course.instructor.bio}</p>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2
                  className={`${merriweather.className} text-2xl md:text-3xl font-bold mb-6`}
                >
                  FAQs
                </h2>

                <div className="space-y-4">
                  {course.faqs.map((faq, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl shadow">
                      <button onClick={()=>toggleModule(i)}
                        className="w-full flex items-center justify-between cursor-pointer">

                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                       <IoChevronDown className={` ${openIndex === i ? "rotate-180":" "} `}/>
                      </button>
                      <div
  className={` transition-all duration-300 overflow-hidden ${
    openIndex === i ? "max-h-[500px] pb-6" : "max-h-0"
  }`}
>
                      <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 bg-card rounded-2xl shadow overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />

                <div className="p-6 space-y-6">
                  <div className="text-center">
                    <p
                      className={`${merriweather.className} text-3xl text-[#B12531]`}
                    >
                      {course.price}
                    </p>
                    <p className="text-sm ">Full course fee</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 ">
                        <FaClock className="text-[#B12531] text-base" />{" "}
                        Duration
                      </span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <FaBookOpen className="text-[#B12531] text-base" />{" "}
                        Level
                      </span>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <FaUsers className="text-[#B12531] text-base" />{" "}
                        Students
                      </span>
                      <span>{course.students}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <FaAward className="text-[#B12531] text-base" />{" "}
                        Certificate
                      </span>
                      <span>Yes</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#B12531] text-white py-3 rounded-lg font-semibold hover:bg-primary/90"
                  >
                    Enroll Now
                  </Link>

                  <p className="text-center text-xs text-muted-foreground">
                    New batches starting soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
