import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const quicksand = Quicksand({ weight: "600" });
const roboto = Roboto({ weight: "400" });
const meriweather = Merriweather({ weight: "700" });

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sagar Adhikari",
      course: "MERN Stack",
      image: "/person1.webp",
      review:
        "The hands-on projects and mentor support helped me land my first internship within 3 months.",
    },
    {
      name: "Nisha Karki",
      course: "UI/UX Design",
      image: "/person2.webp",
      review:
        "Practical learning, real projects, and friendly instructors. Highly recommended!",
    },
    {
      name: "Ramesh Thapa",
      course: "Python & Data Science",
      image: "/person1.webp",
      review:
        "Clear concepts, structured classes, and real-world examples made learning easy.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 px-14">
      {/* Heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-5 py-2 w-fit `}
        >
          students stories
        </span>
        <h2 className={`text-4xl text-[#1E1B3C] mt-9 ${meriweather.className}`}>
          What Our Students Say
        </h2>
        <p className={`text-[#676F7E] mt-3 ${roboto.className}`}>
          Real feedback from students who transformed their careers with us.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group bg-white/90 backdrop-blur border border-[#EFE2DE]
            rounded-2xl p-7 relative
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            hover:-translate-y-2  hover:shadow-[0_14px_40px_rgba(177,37,49,0.2)]
            transition-all duration-300"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-[#EFE2DE] text-3xl absolute top-6 right-6" />

            {/* Review */}
            <p className={`${roboto.className} text-[#4A4E6B] text-sm leading-relaxed mb-6`}>
              “{t.review}”
            </p>

            {/* Divider */}
            <span className="block w-10 h-0.5 bg-[#B12531]/70 rounded-full mb-5"></span>

            {/* User */}
            <div className="flex items-center gap-4">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover border border-[#524DD3]/30"
              />
              <div>
                <h4 className={`${quicksand.className} text-[#1E1B3C]`}>
                  {t.name}
                </h4>
                <span className="text-xs text-[#6F7285]">{t.course}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
