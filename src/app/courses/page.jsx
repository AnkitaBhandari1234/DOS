import CourseCard from "@/PageComponent/Component/CoursesPage/CourseCard";
import CourseFilter from "@/PageComponent/Component/CoursesPage/CourseFilter";
import CourseGrid from "@/PageComponent/Component/CoursesPage/CourseGrid";
import Banner from "@/UI/Banner";
import React from "react";

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
      <CourseGrid/>
    </div>
  );
};

export default page;
