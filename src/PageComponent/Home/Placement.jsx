import { FaBriefcase, FaUserTie, FaRocket } from "react-icons/fa";

const Placement = () => {
  const stats = [
    { icon: <FaBriefcase />, title: "500+ Students Placed" },
    { icon: <FaUserTie />, title: "Career Mentorship" },
    { icon: <FaRocket />, title: "Internship Assistance" },
  ];

  return (
    <section className="bg-white py-16 px-14">
      <div className="grid grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className="p-8 border border-[#E5E7EE] rounded-2xl
            hover:shadow-[0_10px_35px_rgba(82,77,211,0.15)]
            transition-all"
          >
            <div className="text-4xl text-[#524DD3] mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-[#1E1B3C]">
              {s.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Placement;
