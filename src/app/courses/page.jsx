import CourseCard from "@/PageComponent/Component/CoursesPage/CourseCard";
import CourseFilter from "@/PageComponent/Component/CoursesPage/CourseFilter";

import Banner from "@/UI/Banner";
import React from "react";
import courseData from '@/PageComponent/Component/Data/CourseData'

const page = () => {
  
  
  return (
    <div>
      <Banner
        title="Explore Our"
        highlight="Programs"
        subtitle="Choose from our wide range of industry-focused courses designed to equip you with practical skills and knowledge for career success."
        label="Programs"
        bgImage="/coursesheader.jpg"
      />
      <CourseFilter/>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mt-10 max-w-6xl mx-auto pb-24">
          {courseData.map((course, i) => (
            
            <CourseCard key={i} {...course} />
          ))}
        </div>
    </div>
  );
};

export default page;
