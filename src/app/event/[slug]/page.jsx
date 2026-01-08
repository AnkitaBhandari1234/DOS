import EventDetail from "@/PageComponent/Component/EventPage/EventDetail";
import EventsData from "@/PageComponent/Component/Data/EventsData";

const page =async ({ params }) => {
  const { slug } = await params;

  const event = [...EventsData.upcoming, ...EventsData.past].find(
    (ev) => ev.slug === slug
  );

  if (!event) return <p>Event not found</p>;

  return <EventDetail event={event} />;
};

export default page;
