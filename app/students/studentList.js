"use client";

import React from "react";
import StudentCard from "../components/students/list/studentCard";

const StudentList = ({ students }) => {
  return (
    <div className="row">
      {students.map((student) => (
        <StudentCard student={student} key={student.id} />
      ))}
    </div>
  );
};

export default StudentList;
