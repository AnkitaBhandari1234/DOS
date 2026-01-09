'use client'
import CourseCard from "@/PageComponent/Component/CoursesPage/CourseCard";
import CourseFilter from "@/PageComponent/Component/CoursesPage/CourseFilter";

import Banner from "@/UI/Banner";
import React, { useState } from "react";
import courseData from '@/PageComponent/Component/Data/CourseData'

const page = () => {
    const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // filter
  const filteredCourses = courseData.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <Banner
        title="Explore Our"
        highlight="Programs"
        subtitle="Choose from our wide range of industry-focused courses designed to equip you with practical skills and knowledge for career success."
        label="Programs"
        bgImage="/coursesheader.jpg"
      />
      <CourseFilter
      searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-10 max-w-6xl mx-auto pb-24">
         {filteredCourses.map((course,i) => (
          <CourseCard key={i} {...course} />
        ))}

        {filteredCourses.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No courses found
          </p>
        )}
        </div>
    </div>
  );
};

export default page;
