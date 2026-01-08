import React from 'react'
import courseData from '@/PageComponent/Component/Data/CourseData'
import CourseDetail from '@/PageComponent/Component/CoursesPage/CourseDetail';

const page = async ({ params }) => {
  const { slug } = await params;

  const course = courseData.find((c) => c.slug === slug);

  if (!course) {
    return (
      <h1 className="text-center py-20 text-red-500">Blog not found: {slug}</h1>
    );
  }

  return (
<div>
    <CourseDetail course={course} />

  
  </div>
  );
};

export default page;