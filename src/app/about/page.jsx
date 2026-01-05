import AboutHeader from "@/PageComponent/Component/AboutPage/AboutHeader";
import AboutIntro from "@/PageComponent/Component/AboutPage/AboutIntro";
import Mission from "@/PageComponent/Component/AboutPage/Mission";

import StatsData from "@/PageComponent/Component/AboutPage/StatsData";
import Course from "@/PageComponent/Home/Course";
import Team from "@/PageComponent/Home/Team";
import Testimonial from "@/PageComponent/Home/Testimonial";
import WhyChooseUs from "@/PageComponent/Home/WhyChooseUs";

import React from "react";

const page = () => {
  return (
    <div>
      <AboutHeader />
      <AboutIntro />
      <WhyChooseUs />

      <Mission />
      <StatsData />
      <Course />
      <Testimonial />
      
      
      <Team />
    </div>
  );
};

export default page;
