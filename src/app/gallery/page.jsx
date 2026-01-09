"use client";
import GalleryFilter from "@/PageComponent/Component/GalleryPage/GalleryFilter";
import GalleryGrid from "@/PageComponent/Component/GalleryPage/GalleryGrid";

import CTA from "@/PageComponent/Home/CTA";
import Banner from "@/UI/Banner";

import React, { useState } from "react";

const page = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/gallery1.jpg",
      title: "Frontend Live Class",
      category: "Classroom",
    },
    {
      id: 2,
      src: "/gallery6.jpg",
      title: "MERN Stack Workshop",
      category: "Workshop",
    },
    { id: 3, src: "/gallery3.jpg", title: "Tech Fest 2025", category: "Event" },
    {
      id: 4,
      src: "/gallery4.jpg",
      title: "Student Project Demo",
      category: "Projects",
    },
    {
      id: 5,
      src: "/gallery5.jpg",
      title: "Certification Ceremony",
      category: "Achievements",
    },
    {
      id: 6,
      src: "/gallery6.jpg",
      title: "Institute Infrastructure",
      category: "Infrastructure",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  //  FILTER LOGIC
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);
  return (
    <div>
      <Banner
        title="Gallery &"
        highlight="Highlights"
        subtitle="Take a visual tour of DOS Multi Services Pvt. Ltd., its events, and the vibrant learning community that makes our institute special."
        label="Gallery"
        bgImage="/gallerybg.jpg"
      />
      <GalleryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <GalleryGrid images={filteredImages} />
      <CTA />
    </div>
  );
};

export default page;
