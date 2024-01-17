import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { enrollCourse } from "../features/coursesSlice";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from 'react-router-dom';

const AddCourse = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [by, setBy] = useState("");
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();

  const enrollInCourse = (e) => {
    if (name !== "" && desc !== "" && price !== 0 && by !== "" && rating !== "") {
      e.preventDefault();

      const courseId = uuidv4();

      dispatch(
        enrollCourse({
          id: courseId,
          name: name,
          description: desc,
          price: price,
          by: by,
          rating: rating,
          dueDate: "2024-02-01",
        })
      );

      history.push("/");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="add__course">
      <input
        placeholder="Name of the course"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Course Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        placeholder="$$$ Price of the course"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="Course creator"
        value={by}
        onChange={(e) => setBy(e.target.value)}
      />
      <input
        placeholder="Course rating (out of 5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={(e) => enrollInCourse(e)}>Enroll in Course</button>
    </div>
  );
};

export default AddCourse;
