import React from "react";
import getStudents from "../actions/getStudents";

const StudentListPage = async () => {
  const students = await getStudents();
  return (
    <div>
      <ul>
        {students?.map((student) => (
          <li key={student.id}>
            <p>{student.id}</p>
            <p>{student.lastName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
