import React from "react";
import { useSelector } from "react-redux";
import Course from "./Components/Course";
import StudentDashboard from "./StudentDashboard";
import { selectCourses } from "./features/coursesSlice";

import "./styles/main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndCourse from "./Components/IndCourse";
import AddCourse from "./Components/AddCourse";

const App = () => {
  const courses = useSelector(selectCourses);

  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>A Place to enroll in Online Courses!</h1>
          <Link to="/addcourse" className="header__button">
            Enroll Now!
          </Link>
          <Link to="/dashboard" className="header__button">
            Student Dashboard
          </Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <div className="courses">
              {courses &&
                courses.map((course) => (
                  <Link className="link" to={`/${course.id}`}>
                    <Course data={course} />
                  </Link>
                ))}
            </div>
          </Route>
          <Route path="/addcourse">
            <AddCourse />
          </Route>
          <Route path="/dashboard">
            <StudentDashboard />
          </Route>
          <Route path="/:id">
            <IndCourse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;