import BlogCard from "@/PageComponent/Component/BlogPage/BlogCard";
import BlogFilter from "@/PageComponent/Component/BlogPage/BlogFilter";


import FeaturedBlog from "@/PageComponent/Component/BlogPage/FeaturedBlog";
import CTA from "@/PageComponent/Home/CTA";
import Banner from "@/UI/Banner";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner title="Insights &"
      highlight="Resources"
      subtitle="Stay informed with our latest articles, industry insights, success stories, and educational resources."
      label="Blog"
      bgImage="/blogbg.jpg"/>
   
      <BlogFilter/>
      <FeaturedBlog/>
      <BlogCard/>
      <CTA/>
      
      
    </div>
  );
};

export default page;
