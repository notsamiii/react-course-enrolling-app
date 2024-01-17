import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses, likeCourse } from './features/coursesSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleLike = (courseId) => {
    dispatch(likeCourse(courseId));
  };

  return (
    <div>
      <h1>Course Listing Page</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          <p>Instructor: {course.instructor}</p>
          <p>Likes: {course.likes}</p>
          <button onClick={() => handleLike(course.id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
