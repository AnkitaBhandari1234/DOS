const courseData = [
  {
    slug: "korean-language-basics",
    image: "/feature1.jpg",
    badge: "Beginner",
    title: "Korean Language Basics",
    des: "Start your Korean journey with Hangul, basic grammar, and essential vocabulary.",

    overview:
      "This beginner-friendly course introduces students to the Korean language, focusing on Hangul, pronunciation, sentence formation, and basic conversation skills required for daily communication.",

    syllabus: [
      {
        title: "Module 1: Introduction to Hangul",
        topics: [
          "Korean vowels and consonants",
          "Pronunciation rules",
          "Writing practice"
        ]
      },
      {
        title: "Module 2: Basic Grammar",
        topics: [
          "Sentence structure",
          "Particles usage",
          "Forming questions"
        ]
      },
      {
        title: "Module 3: Everyday Conversation",
        topics: [
          "Greetings and introductions",
          "Daily life expressions",
          "Common phrases"
        ]
      }
    ],

    outcomes: [
      "Read and write Hangul confidently",
      "Form simple Korean sentences",
      "Understand basic grammar patterns",
      "Communicate in daily situations"
    ],

    tools: [
      "Video Lessons",
      "PDF Notes",
      "Practice Worksheets",
      "Weekly Quizzes"
    ],

    instructor: {
      name: "Kim Min-soo",
      role: "Senior Korean Language Instructor",
      image: "/instructor1.jpg",
      bio:
        "Kim Min-soo has over 7 years of experience teaching Korean language to international students and specializes in beginner-level instruction."
    },

    price: "NPR 15,000",
    duration: "3 Months",
    level: "Beginner",
    students: 200,

    faqs: [
      {
        question: "Do I need prior knowledge of Korean?",
        answer:
          "No prior knowledge is required. This course is designed specifically for beginners."
      },
      {
        question: "Will I get study materials?",
        answer:
          "Yes, all enrolled students receive PDF notes, worksheets, and recorded video lessons."
      }
    ]
  },

  {
    slug: "topik-preparation",
    image: "/feature2.jpg",
    badge: "Intermediate",
    title: "TOPIK I & II Preparation",
    des: "Comprehensive preparation for TOPIK exams with mock tests and expert guidance.",

    overview:
      "This course is designed for students preparing for TOPIK I and II exams. It covers grammar, vocabulary, reading, writing, and listening strategies with exam-oriented practice.",

    syllabus: [
      {
        title: "Module 1: TOPIK Grammar",
        topics: [
          "Intermediate grammar patterns",
          "Sentence transformation",
          "Error correction"
        ]
      },
      {
        title: "Module 2: Vocabulary & Reading",
        topics: [
          "High-frequency vocabulary",
          "Reading comprehension techniques",
          "Practice passages"
        ]
      },
      {
        title: "Module 3: Mock Tests",
        topics: [
          "Full-length mock exams",
          "Time management strategies",
          "Performance analysis"
        ]
      }
    ],

    outcomes: [
      "Master TOPIK exam structure",
      "Improve reading and listening speed",
      "Write structured Korean answers",
      "Boost exam confidence"
    ],

    tools: [
      "Mock Tests",
      "Answer Sheets",
      "Grammar Workbooks",
      "Live Doubt Sessions"
    ],

    instructor: {
      name: "Park Ji-eun",
      role: "TOPIK Specialist",
      image: "/person1.webp",
      bio:
        "Park Ji-eun is a certified TOPIK trainer who has helped hundreds of students achieve high TOPIK scores."
    },

    price: "NPR 25,000",
    duration: "6 Months",
    level: "Intermediate",
    students: 150,

    faqs: [
      {
        question: "Is this course suitable for TOPIK II?",
        answer:
          "Yes, this course covers both TOPIK I and TOPIK II levels in detail."
      },
      {
        question: "Are mock exams included?",
        answer:
          "Yes, students receive multiple full-length mock tests with evaluation."
      }
    ]
  },

  {
    slug: "eps-topik-training",
    image: "/feature3.jpg",
    badge: "All Levels",
    title: "EPS-TOPIK Training",
    des: "Specialized training for EPS-TOPIK with exam-focused practice.",

    overview:
      "This EPS-TOPIK training course prepares students for the Employment Permit System test, focusing on vocabulary, listening skills, and exam techniques.",

    syllabus: [
      {
        title: "Module 1: EPS Vocabulary",
        topics: [
          "Factory and workplace terms",
          "Daily life vocabulary",
          "Common exam words"
        ]
      },
      {
        title: "Module 2: Listening Practice",
        topics: [
          "Listening drills",
          "Audio comprehension",
          "Exam-style questions"
        ]
      },
      {
        title: "Module 3: Exam Strategy",
        topics: [
          "Question patterns",
          "Time management",
          "Final revision"
        ]
      }
    ],

    outcomes: [
      "Understand EPS-TOPIK format",
      "Improve listening accuracy",
      "Increase vocabulary retention",
      "Gain confidence for exam day"
    ],

    tools: [
      "Audio Practice Files",
      "Vocabulary Flashcards",
      "Mock Exams",
      "Instructor Feedback"
    ],

    instructor: {
      name: "Lee Sung-ho",
      role: "EPS-TOPIK Trainer",
      image: "/person1.webp",
      bio:
        "Lee Sung-ho specializes in EPS-TOPIK training and has successfully guided students toward overseas employment."
    },

    price: "NPR 20,000",
    duration: "4 Months",
    level: "All Levels",
    students: 300,

    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "Yes, the course starts from basics and gradually moves to exam-level practice."
      },
      {
        question: "Does this guarantee job placement?",
        answer:
          "The course prepares you for EPS-TOPIK. Job placement depends on exam performance and government procedures."
      }
    ]
  }
];

export default courseData;
