"use client";

import React, { useState } from "react";
import StudentCard from "../components/students/list/studentCard";
import { Button } from "react-bootstrap";

const StudentList = ({ students }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="row">
        {students.map((student) => (
          <StudentCard student={student} key={student.id} />
        ))}
      </div>
      <div>
        <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Counter button
        </Button>
        <p>Counter: {counter}</p>
      </div>
    </>
  );
};

export default StudentList;
