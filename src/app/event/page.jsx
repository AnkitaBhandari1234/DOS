import EventCard from "@/PageComponent/Component/EventPage/EventCard";
import PastEvents from "@/PageComponent/Component/EventPage/PastEvents";
import UpcomingEvents from "@/PageComponent/Component/EventPage/UpcomingEvents";
import Banner from "@/UI/Banner";
import React from "react";

const page = () => {
   const eventsData = {
    upcoming:[

      {
        image: "/course1.jpg",
        badge: "Conference",
        title: "Annual Education Conference 2024",
        des: "Join industry leaders and educators for insights on the future of education and technology in learning.",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "DOS Main Auditorium",
  
        enroll: "500+ Expected",
      },
      {
        image: "/course2.jpg",
        badge: "Ceremony",
        title: "Graduation Ceremony",
        des: "Celebrating the achievements of our 2024 graduating class. Join us for this milestone event.",
        date: "April 20, 2024",
        time: "10:00 AM - 1:00 PM",
        location: "DOS Campus Ground",
  
        enroll: "1000+ Expected",
      },
      {
        image: "/course2.jpg",
        badge: "Ceremony",
        title: "Graduation Ceremony",
        des: "Celebrating the achievements of our 2024 graduating class. Join us for this milestone event.",
        date: "April 20, 2024",
        time: "10:00 AM - 1:00 PM",
        location: "DOS Campus Ground",
  
        enroll: "1000+ Expected",
      },
    ],
    past:[

      {
        image: "/course3.jpg",
        badge: "Workshop",
        title: "Digital Marketing Workshop",
        des: "Hands-on workshop covering SEO, social media marketing, and content strategy fundamentals.",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Training Room 2",
  
        enroll: "50+ Expected",
      },
      {
        image: "/course3.jpg",
        badge: "Workshop",
        title: "Digital Marketing Workshop",
        des: "Hands-on workshop covering SEO, social media marketing, and content strategy fundamentals.",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Training Room 2",
  
        enroll: "50+ Expected",
      },
      {
        image: "/course3.jpg",
        badge: "Workshop",
        title: "Digital Marketing Workshop",
        des: "Hands-on workshop covering SEO, social media marketing, and content strategy fundamentals.",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Training Room 2",
  
        enroll: "50+ Expected",
      },
    ]
   };
  return (
    <div>
      <Banner
        title="Upcoming &"
        highlight="Events"
        subtitle="Join our workshops, webinars, and cultural events to enhance your skills, network, and experience."
        label="Events"
        bgImage="/eventbg.jpg"
      />
      <UpcomingEvents events={eventsData.upcoming}/>
      <PastEvents events={eventsData.past}/>
    </div>
  );
};

export default page;
