import BlogCard from "@/PageComponent/Component/BlogPage/BlogCard";
import BlogFilter from "@/PageComponent/Component/BlogPage/BlogFilter";
import BlogHeader from "@/PageComponent/Component/BlogPage/BlogHeader";
import FeaturedBlog from "@/PageComponent/Component/BlogPage/FeaturedBlog";
import CTA from "@/PageComponent/Home/CTA";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogHeader />
   
      <FeaturedBlog/>
      <BlogFilter/>
      <BlogCard/>
      <CTA/>
    </div>
  );
};

export default page;
