import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const featuredBlogs = [
  {
    id: 1,
    title: "Frontend Developer Roadmap for Beginners",
    category: "Web Development",
    image: "/feature1.jpg",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    description:
      "A complete beginner-friendly roadmap to become a frontend developer using HTML, CSS, JavaScript, and React.",
  },
  {
    id: 2,
    title: "How to Choose the Right IT Career Path",
    category: "Career",
    image: "/feature2.jpg",
    date: "Jan 2, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Top Skills Every IT Student Must Learn in 2026",
    category: "Technology",
    image: "/feature3.jpg",
    date: "Dec 28, 2025",
    readTime: "5 min read",
  },
];

const FeaturedBlog = () => {
  const [bigBlog, ...smallBlogs] = featuredBlogs; // split first blog as big, rest as small

  return (
    <section className="bg-[#F7F7FB] px-6 lg:px-14 py-20">
      <div className="mb-14 text-center">
        <h2 className={`text-[#1D1A34] text-5xl font-bold ${merriweather.className}`}>Featured Articles</h2>
        <p className={`text-[#6E6B8F] mt-2 ${roboto.className}`}>Hand-picked blogs curated by our instructors.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* BIG FEATURE */}
        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(82,77,211,0.12)] hover:-translate-y-1 transition">
          <Image
            src={bigBlog.image}
            alt={bigBlog.title}
            width={800}
            height={320}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <span className="bg-[#524dd3]/10 text-[#524dd3] text-sm px-3 py-1 rounded-full">
              {bigBlog.category}
            </span>
            <h3 className="text-[#1D1A34] text-2xl font-semibold mt-4">{bigBlog.title}</h3>
            <p className="text-[#6E6B8F] mt-3">{bigBlog.description}</p>
          </div>
        </div>

        {/* SMALL FEATURES */}
        <div className="flex flex-col gap-8">
          {smallBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(82,77,211,0.12)] hover:-translate-y-1 transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={150}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-[#524dd3]">{blog.category}</span>
                <h4 className="text-[#1D1A34] font-semibold mt-2">{blog.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
