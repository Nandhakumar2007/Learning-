


import React, { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(0);

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  const resetMarks = () => {
    setMarks(0);
  };

  return (
    <div style={{
      border: "2px solid black",
      margin: "20px",
      padding: "20px"
    }}>
      <h2>Name: {props.name}</h2>
      <h3>Department: {props.department}</h3>
      <h3>Marks: {marks}</h3>

      <button onClick={increaseMarks}>Add 5 Marks</button>
      <button onClick={resetMarks}>Reset</button>
    </div>
  );
}

export default Student;