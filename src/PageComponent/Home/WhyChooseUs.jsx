import { Merriweather, Quicksand, Roboto } from "next/font/google";
import { FaChalkboardTeacher, FaProjectDiagram, FaUserTie, FaRocket, FaClock, FaMoneyBillWave } from "react-icons/fa";

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const meriweather = Merriweather({ weight: "700" });

const WhyChooseUs = () => {
  const points = [
    {
      title: "Industry Expert Mentors",
      desc: "Learn directly from professionals with real-world experience.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Project-Based Learning",
      desc: "Work on real projects that build a strong job-ready portfolio.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Career & Internship Support",
      desc: "CV review, interview prep, and internship opportunities.",
      icon: <FaUserTie />,
    },
    {
      title: "Modern Curriculum",
      desc: "Updated syllabus aligned with current industry demands.",
      icon: <FaRocket />,
    },
    {
      title: "Flexible Class Timing",
      desc: "Weekend & weekday batches available.",
      icon: <FaClock />,
    },
    {
      title: "Affordable Fees",
      desc: "Quality education at student-friendly pricing.",
      icon: <FaMoneyBillWave />,
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-20 px-14">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <span
          className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase   text-[#B12531] rounded-full px-6 py-2 w-fit  `}
        >
          Why Choose DOS ?
        </span>
       
        <p className={`text-[#4A4E6A] text-base mt-10 ${roboto.className}`}>
          At DOS Multi Services, we provide hands-on, career-focused training in languages, accounting, and IT to help students build strong, global-ready careers.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-10">
        {points.map((item, i) => (
          <div
            key={i}
            className="group bg-[#FDFDFC] p-8 rounded-2xl border border-[#E6E1DA]
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            hover:shadow-[0_14px_40px_rgba(177,37,49,0.2)]
            hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl
              bg-[#F5E7E7] text-[#B12531] text-2xl
              group-hover:bg-[#B12531] group-hover:text-white transition-all">
              {item.icon}
            </div>

            <h3 className={`mt-5 text-lg text-[#1E1B3C] ${quicksand.className}`}>
              {item.title}
            </h3>

            <p className={`mt-2 text-sm text-[#4A4E6B] ${roboto.className}`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
