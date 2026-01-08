const EventsData = {
  upcoming: [
    {
      image: "/course1.jpg",
      slug: "annual-conference-2024",
      badge: "Conference",
      title: "Annual Education Conference ",
      des: "Join industry leaders and educators for insights on the future of education and technology in learning.",
      longDescription: "The Annual Convocation Ceremony is the highlight of our academic calendar, celebrating the hard work and dedication of our graduating students. Distinguished guests, proud families, and the entire Gyanam community come together for this memorable occasion.",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "DOS Main Auditorium",
      enroll: "500+ Expected",
      showRegister: true,

      // Extra details for Event Detail Page
      schedule: [
        { time: "09:00 AM", activity: "Registration & Welcome" },
        { time: "10:00 AM", activity: "Opening Keynote" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "01:00 PM", activity: "Panel Discussion: Future of EdTech" },
        { time: "03:00 PM", activity: "Workshops & Networking" },
      ],
      speakers: [
        { name: "Dr. John Smith", role: "Keynote Speaker" },
        { name: "Prof. Jane Doe", role: "Panel Moderator" },
      ],
    },
    {
      image: "/course2.jpg",
      slug: "graduation-ceremony",
      badge: "Ceremony",
      title: "Graduation Ceremony",
      des: "Celebrating the achievements of our 2024 graduating class. Join us for this milestone event.",
      longDescription: "A memorable event marking the success of our graduating students. Enjoy speeches, awards, and celebrations with faculty and peers.",
      date: "April 20, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "DOS Campus Ground",
      enroll: "1000+ Expected",
      showRegister: true,

      schedule: [
        { time: "10:00 AM", activity: "Procession & Opening" },
        { time: "10:30 AM", activity: "Speeches & Awards" },
        { time: "12:00 PM", activity: "Photo Session" },
      ],
      speakers: [
        { name: "Dean Michael Brown", role: "Ceremony Host" },
      ],
    },
  ],
  past: [
    {
      image: "/course3.jpg",
      slug: "digital-marketing-workshop",
      badge: "Workshop",
      title: "Digital Marketing Workshop",
      des: "Hands-on workshop covering SEO, social media marketing, and content strategy fundamentals.",
      longDescription: "This workshop provides practical digital marketing skills including SEO, content strategy, and social media marketing techniques to boost your career.",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Training Room 2",
      enroll: "50+ Expected",
      showRegister: false,

      schedule: [
        { time: "09:00 AM", activity: "Introduction & Overview" },
        { time: "10:00 AM", activity: "SEO Workshop" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "01:00 PM", activity: "Social Media Marketing" },
        { time: "03:00 PM", activity: "Content Strategy Session" },
      ],
      speakers: [
        { name: "Alice Johnson", role: "Trainer" },
      ],
    },
  ],
};

export default EventsData;
