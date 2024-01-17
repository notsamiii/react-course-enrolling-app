import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = useSelector((state) =>
    state.courses.courses.find((c) => c.id === courseId)
  );

  return (
    <div>
      <h1>Course Details Page</h1>
      {course && (
        <div>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Description: {course.description}</p>
          <p>Likes: {course.likes}</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;