import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineAccessTime, MdOutlineCalendarToday } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import BlogDetailHeader from "@/PageComponent/Component/BlogPage/BlogDetailHeader";
import RelatedArticle from "@/PageComponent/Component/BlogPage/RelatedArticle";
import BlogContent from "@/PageComponent/Component/BlogPage/BlogContent";

const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });

const blogs = [
  {
    slug: "javascript-basics",
    title: "JavaScript Basics Every Beginner Must Know",
    image: "/feature1.jpg",
    paragraphs: [
      "Learn core JavaScript concepts explained simply.",
      "Understand variables, functions, and loops.",
    ],
    highlight: "JavaScript is the foundation of modern frontend development.",
    subTitle: "Why JavaScript Matters",
    subContent: [
      "Used in React, Next.js, and modern frameworks.",
      "Essential for frontend engineers.",
    ],
  },
  {
    slug: "frontend-roadmap-2026",
    title: "Frontend Developer Roadmap 2026",
    image: "/feature4.jpg",
    paragraphs: [
      "A complete beginner roadmap to frontend development.",
      "Covers HTML, CSS, JS, React, and Next.js.",
    ],
    highlight:
      "Frontend development is one of the most in-demand skills in 2026.",
    subTitle: "Technologies to Learn",
    subContent: ["HTML, CSS, JavaScript", "React, Next.js, Tailwind"],
  },
];

const Page = async ({ params }) => {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <h1 className="text-center py-20 text-red-500">Blog not found: {slug}</h1>
    );
  }

  return (
<div>
  <BlogDetailHeader/>
  <BlogContent/>
  <RelatedArticle/>
  </div>
  );
};

export default Page;
