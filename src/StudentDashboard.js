import React from "react";
import { useSelector } from "react-redux";
import { selectCourses, selectEnrolledCourses } from "./features/coursesSlice";

const StudentDashboard = () => {
  const availableCourses = useSelector(selectCourses);
  const enrolledCourses = useSelector(selectEnrolledCourses);

  return (
    <div className="student-dashboard">
      <div className="enrolled-courses">
        <h1>Your Enrolled Courses</h1>
        {enrolledCourses.length > 0 ? (
          <ul>
            {enrolledCourses.map((course) => (
              <li key={course.id}>
                <div>
                  <img src={course.thumbnail} alt={`${course.name} Thumbnail`} />
                </div>
                <div>
                  <h2>{course.name}</h2>
                  <p>Instructor: {course.instructor}</p>
                  <p>Due Date: {course.dueDate}</p>
                  {course.completed ? (
                    <p>Status: Completed</p>
                  ) : (
                    <button>Mark as Completed</button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </div>

      <div className="available-courses">
        <h1>Available Courses</h1>
        {availableCourses.length > 0 ? (
          <ul>
            {availableCourses.map((course) => (
              <li key={course.id}>
                <div>
                  <img src={course.thumbnail} alt={`${course.name} Thumbnail`} />
                </div>
                <div>
                  <h2>{course.name}</h2>
                  <p>Instructor: {course.instructor}</p>
                  <p>Description: {course.description}</p>
                  <p>Price: ${course.price}</p>
                  {/* Add other details as needed */}
                  <button>Enroll Now</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No available courses.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
