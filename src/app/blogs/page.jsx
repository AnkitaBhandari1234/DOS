"use client";
import BlogCard from "@/PageComponent/Component/BlogPage/BlogCard";
import BlogFilter from "@/PageComponent/Component/BlogPage/BlogFilter";

import FeaturedBlog from "@/PageComponent/Component/BlogPage/FeaturedBlog";
import CTA from "@/PageComponent/Home/CTA";
import Banner from "@/UI/Banner";
import React, { useState } from "react";

const page = () => {
  const allBlogs = [
    {
      id: 1,
      slug: "javascript-basics",
      title: "Career Opportunities in South Korea for Nepali Workers",
      category: "Career Guide",
      description:
        "Explore the growing demand for skilled workers in South Korea and how to prepare for overseas employment.",
      date: "December 28, 2025",
      image: "/feature1.jpg",
      featured: true,
    },
    {
      id: 2,
      slug: "javascript-basics",
      title: "Career Opportunities in South Korea for Nepali Workers",
      category: "Career Guide",
      description:
        "Explore the growing demand for skilled workers in South Korea and how to prepare for overseas employment.",
      date: "December 28, 2025",
      image: "/feature2.jpg",
    },
    {
      id: 3,
      slug: "frontend-roadmap-2026",
      title: "Frontend Developer Roadmap 2026",
      category: "Web Development",
      description: "Step-by-step roadmap for beginners.",
      image: "/feature4.jpg",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState(""); 
    // featured blog and search filter
  const featuredBlogs = allBlogs.filter((blog) => {
    const categoryMatch =
      selectedCategory === "All" || blog.category === selectedCategory;
      const searchMatch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return blog.featured === true && categoryMatch && searchMatch;
  });
  // normal blog and search filter
  const normalBlogs = allBlogs.filter((blog) => {
    const categoryMatch =
      selectedCategory === "All" || blog.category === selectedCategory;
     const searchMatch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return blog.featured !== true && categoryMatch && searchMatch;
  });
  const totalBlogs = [...featuredBlogs, ...normalBlogs];
  return (
    <div>
      <Banner
        title="Insights &"
        highlight="Resources"
        subtitle="Stay informed with our latest articles, industry insights, success stories, and educational resources."
        label="Blog"
        bgImage="/blogbg.jpg"
      />

      <BlogFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
         searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
      />
      {featuredBlogs.length > 0 && <FeaturedBlog blog={featuredBlogs[0]} />}
      {/* if there is no blogs */}
      {totalBlogs.length === 0 ? (
        <p className="text-center text-xl  mt-10 text-[#B12531] py-20">
          No blogs found for this category.
        </p>
      ) : (
        <BlogCard blogs={normalBlogs} />
      )}
      <CTA />
    </div>
  );
};

export default page;
