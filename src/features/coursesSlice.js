import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    user: {
      enrolledCourses: [],
    },
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    likeCourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find((c) => c.id === courseId);
      if (course) {
        course.likes += 1;
      }
    },
    enrollCourse: (state, action) => {
      const { id, name, instructor, description, price, rating, dueDate } = action.payload;
      state.user.enrolledCourses.push({
        id,
        name,
        instructor,
        description,
        price,
        rating,
        dueDate,
      });
    },
    
    markAsCompleted: (state, action) => {
      const courseId = action.payload;
      const enrolledCourse = state.user.enrolledCourses.find((course) => course.id === courseId);
      if (enrolledCourse) {
        enrolledCourse.completed = true;
      }
    },
  },
});

export const { setCourses, enrollCourse, markAsCompleted } = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;
export const selectEnrolledCourses = (state) => state.courses.user.enrolledCourses;

export default coursesSlice.reducer;
