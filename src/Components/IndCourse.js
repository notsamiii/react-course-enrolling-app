import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { markAsCompleted } from "../features/coursesSlice";

const IndCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const enrolledCourses = useSelector((state) => state.user.enrolledCourses);

  const course = courses.find((course) => course.id === id);

  const markCourseAsCompleted = (courseId) => {
    dispatch(markAsCompleted(courseId));
  };

  return (
    <div>
      {course && (
        <div className="ind__course">
          <h1 className="ind__course__title">{course.name}</h1>
          <span className="course__by">by {course.instructor}</span>
          <div>
            <p className="course__desc">Description: {course.description}</p>
            <h1 className="ind__course__price">${course.price}</h1>
          </div>
          <h4 className="ind__course__rating">Rating {course.rating}/5</h4>
          {enrolledCourses.some((enrolledCourse) => enrolledCourse.id === id) ? (
            <p>Course already enrolled</p>
          ) : (
            <button className="" onClick={() => markCourseAsCompleted(id)}>
              Enroll in Course
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default IndCourse;
