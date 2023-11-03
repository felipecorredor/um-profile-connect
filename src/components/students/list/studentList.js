import React from "react";
import StudentCard from "./studentCard";

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
