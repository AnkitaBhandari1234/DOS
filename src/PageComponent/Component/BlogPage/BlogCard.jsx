import { Merriweather, Quicksand, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const BlogCard = () => {
    const allBlogs=[
  {
    "id": 1,
    "title": "JavaScript Basics Every Beginner Must Know",
    "category": "Programming",
    "description": "Learn core JavaScript concepts explained in simple language.",
    "image": "/feature1.jpg"
  },
  {
    "id": 2,
    "title": "Frontend Developer Roadmap 2026",
    "category": "Web Development",
    "description": "Step-by-step roadmap for beginners to become a frontend developer.",
    "image": "/feature4.jpg"
  },
  {
    "id": 3,
    "title": "UI/UX Design Principles for Modern Apps",
    "category": "UI/UX",
    "description": "Learn the fundamentals of user interface and experience design.",
    "image": "/feature3.jpg"
  },
  {
    "id": 4,
    "title": "How to Choose the Right IT Career Path",
    "category": "Career",
    "description": "Tips to select the perfect career path in the IT industry.",
   "image": "/feature2.jpg"
  },
  {
    "id": 5,
    "title": "Top 10 Python Libraries for Data Science",
    "category": "Programming",
    "description": "An overview of essential Python libraries for data analysis and AI.",
   "image": "/feature1.jpg"
  },
  {
    "id": 6,
    "title": "Building Your First Mobile App with Flutter",
    "category": "Mobile App",
    "description": "Beginner-friendly guide to create your first Flutter mobile application.",
    "image": "/feature3.jpg"
  }
]

  return (
    <section className="bg-white px-6 lg:px-14 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition"
            >
              <Image src={blog.image} alt='' width={200} height={500} className="object-cover h-[200px] w-full" /> {/* Placeholder Image */}
              <div className="p-6">
                <span className={`text-xs text-[#524dd3] ${roboto.className}`}>{blog.category}</span>
                <h4 className={`text-[#1D1A34] font-semibold mt-2 ${merriweather.className}`}>{blog.title}</h4>
                <p className={`text-[#6E6B8F] text-sm mt-2 ${quicksand.className}`}>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default BlogCard