import { Merriweather, Quicksand, Roboto } from "next/font/google";
import React from "react";
import {
  FaBullhorn,
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
  FaMobileAlt,
  FaUserCheck,
} from "react-icons/fa";
import { LuCodeXml, LuRocket } from "react-icons/lu";
const quicksand = Quicksand({
  weight: "600",
});
const roboto = Roboto({
  weight: "400",
});
const meriweather = Merriweather({
  weight: "700",
});

const Course = () => {
  const courses = [
    {
      title: "Full Stack Web Development (MERN)",
      icon: <FaLaptopCode />,
      description:
        "Become a job-ready full stack developer by mastering frontend and backend with MERN stack. Build real-world projects from scratch.",
      features: [
        "MERN Stack fundamentals (MongoDB, Express, React, Node.js)",
        "REST APIs & JWT Authentication",
        "Admin panels, dashboards, e-commerce projects",
      ],
      duration: "3-4 Months",
      level: "Beginner to Advanced",
    },
    {
      title: "Frontend Development (React + Next.js)",
      icon: <LuCodeXml />,
      description:
        "Create modern, responsive, and interactive user interfaces using React and Next.js.",
      features: [
        "React fundamentals → advanced concepts",
        "Next.js routing, server-side rendering, and API integration",
        "Tailwind CSS & responsive UI",
      ],
      duration: "2.5 Months",
      level: "Beginner",
    },
    {
      title: "Backend Development (Node.js + Express)",
      icon: <FaLayerGroup />,
      description:
        "Build scalable and secure backend systems using Node.js and Express.",
      features: [
        "REST API design and middleware",
        "MongoDB database management",
        "Authentication, authorization, and payment integration",
      ],
      duration: "2-3 Months",
      level: "Beginner to Intermediate",
    },
    {
      title: "Python Programming & Automation",
      icon: <FaCode />,
      description:
        "Learn Python fundamentals and automate real-world tasks with scripts and tools.",
      features: [
        "Python basics and advanced scripting",
        "File handling & automation",
        "Web scraping & data manipulation",
      ],
      duration: "2 Months",
      level: "Beginner",
    },
    {
      title: "UI/UX Design (Figma + Prototyping)",
      icon: <FaUserCheck />,
      description:
        "Design professional web and mobile interfaces with wireframes, prototypes, and user flows.",
      features: [
        "Wireframes & mockups",
        "Interactive prototypes",
        "Real design projects for portfolio",
      ],
      duration: "1.5-2 Months",
      level: "Beginner",
    },
    {
      title: "Digital Marketing & SEO",
      icon: <FaBullhorn />,
      description:
        "Learn how to improve online visibility with SEO, social media marketing, and content strategy.",
      features: [
        "SEO tools & analytics",
        "Campaign planning and management",
        "Content creation and optimization",
      ],
      duration: "1.5 Months",
      level: "Beginner",
    },
    {
      title: "Mobile App Development (Flutter)",
      icon: <FaMobileAlt />,
      description:
        "Build cross-platform mobile applications using Flutter and Dart, with Firebase integration.",
      features: [
        "Flutter UI development",
        "State management & app navigation",
        "Firebase authentication & database",
      ],
      duration: "2–2.5 Months",
      level: "Beginner",
    },
    {
      title: "Data Science & AI (Beginner Track)",
      icon: <LuRocket />,
      description:
        "Explore Python-based data science, basic machine learning, and data visualization projects.",
      features: [
        "Data manipulation with Pandas & NumPy",
        "Regression, clustering, and ML basics",
        "Visualization using Matplotlib",
      ],
      duration: "2.5 Months",
      level: "Beginner",
    },
  ];

  return (
    <section className="">
      <div className="bg-[#221F3C] text-[#E3E0FF] py-16 px-14 flex flex-col  items-center ">
        {/* text */}
        <div className="text-center flex flex-col gap-6 items-center  w-7/12">
          <span
            className={`bg-[#524DD3] ${quicksand.className} text-sm text-white rounded-full px-3 py-1 w-fit`}
          >
            Career-Ready IT Training
          </span>
          <h1 className={`${meriweather.className} text-4xl text-white`}>
            Our Professional IT Courses
          </h1>
          <p
            className={`${roboto.className} text-[#C8C6E3] text-base leading-5 `}
          >
            “Explore industry-focused, practical training programs designed to
            help you build real skills and launch a successful career in tech.”
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-3 gap-10 mt-20 w-full  ">
          {courses.map((val, i) => {
            return (
              <div
                key={i}
                className=" h-full bg-[linear-gradient(#26224A,#1D1A34)] flex flex-col justify-between border border-[#524DD326] rounded-[18px] p-8   hover:shadow-[0_8px_35px_rgba(82,77,211,0.45)] hover:scale-105 hover:border-[#524DD3]  transition-all duration-300 ease-in-out group"
              >
                <div className="w-full text-center  ">
                  <span className="   w-16 h-16 text-3xl text-[#6E69F0] bg-[#6E69F01A] group-hover:shadow-[0_0_18px_#524DD345] group-hover:scale-110 transition-all duration-300 ease-in-out  inline-flex items-center  justify-center  rounded-full">
                    {val.icon}
                  </span>
                </div>
                <h1
                  className={`${meriweather.className} text-[20px] text-white text-center mt-4`}
                >
                  {val.title}
                </h1>
                <p className={`${roboto.className} text-sm text-[#C8C6E3] mb-3`}>
  {val.description}
</p>
                <p
                  className={`${roboto.className} text-base text-[#C8C6E3]`}
                ></p>

                {/* Features List */}
                <ul className="space-y-1 mb-3">
                  {val.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`${roboto.className} text-sm text-[#A9A6C3] list-disc ml-4`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <h4 className="bg-[#524DD3]/20 text-white px-3 py-2 rounded-md">
                  {val.duration}
                </h4>
                <h4 className="text-[#C8C6E3] mt-3">{val.level}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course;
