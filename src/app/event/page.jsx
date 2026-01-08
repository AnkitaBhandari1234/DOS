import EventCard from "@/PageComponent/Component/EventPage/EventCard";
import Banner from "@/UI/Banner";
import EventsData from "@/PageComponent/Component/Data/EventsData";
import { Merriweather, Quicksand, Roboto } from "next/font/google";

const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const meriweather = Merriweather({ weight: "700" });

const page = () => {
  const { upcoming, past } = EventsData;

  return (
    <div>
      <Banner
        title="Upcoming &"
        highlight="Events"
        subtitle="Join our workshops, webinars, and cultural events to enhance your skills, network, and experience."
        label="Events"
        bgImage="/eventbg.jpg"
      />

      {/* Upcoming Events */}
      <section className="py-20 flex flex-col items-center gap-3">
        <span className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase text-[#B12531] rounded-full px-5 py-2 w-fit`}>
          Don't miss out
        </span>
        <h1 className={`${meriweather.className} mt-5 text-4xl text-[#3D3029]`}>
          Upcoming Events
        </h1>
        <p className={`${roboto.className} text-[#4A4E6A] text-base leading-5 text-center max-w-3xl`}>
          Join us for workshops, seminars, and networking opportunities that will enhance your learning journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 mt-10 max-w-6xl">
          {upcoming.map((event, i) => (
            <EventCard key={i} {...event} showRegister={true} />
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-[#F2F0ED] py-20 flex flex-col items-center gap-3">
        <span className={`bg-[#EFE2DE] ${quicksand.className} text-base uppercase text-[#B12531] rounded-full px-5 py-2 w-fit`}>
          Don't miss out
        </span>
        <h1 className={`${meriweather.className} mt-5 text-4xl text-[#3D3029]`}>
          Past Events
        </h1>
        <p className={`${roboto.className} text-[#4A4E6A] text-base leading-5 text-center max-w-3xl`}>
          Look back at previous events and see how we've helped learners achieve their goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-6 mt-10 max-w-6xl">
          {past.map((event, i) => (
            <EventCard key={i} {...event} showRegister={false} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
