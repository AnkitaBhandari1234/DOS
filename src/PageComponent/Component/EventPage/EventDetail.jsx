import Banner from "@/UI/Banner";
import { Merriweather, Quicksand, Roboto } from "next/font/google";
import Link from "next/link";
import {  FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
const quicksand = Quicksand({ weight: "700" });
const roboto = Roboto({ weight: "400" });
const merriweather = Merriweather({ weight: "700" });
const EventDetail = ({ event }) => {
  return (
    <div>
      <Banner
        title={event.title}
        subtitle={event.des}
        highlight={event.date.split(" ")[2]}
        label="Event"
        bgImage={event.image}
        meta={
          <>
            <span className="flex items-center gap-2 text-lg font-semibold"> <FaCalendarAlt  /> {event.date}</span>
            <span className="flex items-center gap-2 text-lg font-semibold"><FaMapMarkerAlt/> {event.location}</span>
            <span className="flex items-center gap-2 text-lg font-semibold"><FaUser/> {event.enroll}</span>
          </>
        }
      />
     
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 mx-10">

            {/* About */}
            <div>
                <Link href='/event' className="flex items-center gap-2 text-lg font-semibold mb-5 hover:text-[#B12531] transition-colors duration-300 ease-in-out w-fit"><IoMdArrowBack className="text-lg" />Back to Events</Link>
              <h2 className={`${merriweather.className} text-2xl font-bold text-gray-900 mb-4`}>
                About This Event
              </h2>
              <p className={`${roboto.className} text-gray-700 leading-relaxed`}>
                {event.longDescription}
              </p>
            </div>

            {/* Schedule */}
            {event.schedule?.length > 0 && (
              <div>
                <h2 className={`${merriweather.className} text-2xl font-bold text-gray-900 mb-6`}>
                  Event Schedule
                </h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                      <div className="w-24 ">
                        <span className={`${quicksand.className} text-[#B12531] font-semibold`}>{item.time}</span>
                      </div>
                      <div className="h-8 w-px bg-gray-300" />
                      <div className={`${roboto.className} text-gray-800`}>{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Speakers */}
            {event.speakers?.length > 0 && (
              <div>
                <h2 className={`${merriweather.className} text-2xl font-bold text-gray-900 mb-6`}>
                  Featured Speakers
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
                      <div className="w-16 h-16 bg-[#EFE2DE] rounded-full flex items-center justify-center">
                        <FaUser className="text-[#B12531]" size={24} />
                      </div>
                      <div>
                        <h4 className={`${quicksand.className} text-gray-900 font-semibold`}>{speaker.name}</h4>
                        <p className={`${roboto.className} text-[#B12531] text-sm`}>{speaker.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">

              {event.showRegister && (
                <div className="bg-[#EFE2DE] rounded-xl p-6 text-center ">
                  <h3 className={`${quicksand.className} text-xl font-semibold text-[#3D3029] mb-2`}>
                    Don't Miss Out!
                  </h3>
                  <p className={`${roboto.className} text-[#4A4E6A] text-sm mb-4`}>
                    Secure your spot at this exclusive event.
                  </p>
                  <Link href='/contact' className="w-full bg-[#B12531] font-semibold text-white px-8 py-2 rounded-lg ">
                    Register Now
                  </Link>
                </div>
              )}

              <div className="bg-white rounded-xl p-6 shadow">
                <h3 className={`${merriweather.className} text-lg font-semibold text-gray-900 mb-4`}>
                  Event Details
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <FaCalendarAlt className="text-[#B12531] mt-1" />
                    <div>
                      <p className={`${roboto.className} text-gray-500`}>Date</p>
                      <p className={`${quicksand.className} font-medium text-gray-900`}>{event.date}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaClock className="text-[#B12531] mt-1" />
                    <div>
                      <p className={`${roboto.className} text-gray-500`}>Time</p>
                      <p className={`${quicksand.className} font-medium text-gray-900`}>{event.time}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#B12531] mt-1" />
                    <div>
                      <p className={`${roboto.className} text-gray-500`}>Venue</p>
                      <p className={`${quicksand.className} font-medium text-gray-900`}>{event.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaUser className="text-[#B12531] mt-1" />
                    <div>
                      <p className={`${roboto.className} text-gray-500`}>Enrollment</p>
                      <p className={`${quicksand.className} font-medium text-gray-900`}>{event.enroll}</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default EventDetail;
