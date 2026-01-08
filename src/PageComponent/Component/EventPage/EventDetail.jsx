import Banner from "@/UI/Banner";

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
            <span>📅 {event.date}</span>
            <span>📍 {event.location}</span>
            <span>👥 {event.enroll}</span>
          </>
        }
      />
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        <p>{event.longDescription || event.des}</p>
      </section>
    </div>
  );
};

export default EventDetail;
