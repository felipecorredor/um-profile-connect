import React from "react";
import StudentCard from "./studentCard";
import getStudents from "@/app/actions/getStudents";
import ClientOnly from "../../ClientOnly";

const StudentList = async () => {
  const students = await getStudents();

  if (!students.length) {
    return (
      <ClientOnly>
        <p>No hay estudiantes</p>
      </ClientOnly>
    );
  }

  return (
    <div className="row">
      {students?.map((student) => (
        <ClientOnly key={student.id}>
          <StudentCard student={student} />
        </ClientOnly>
      ))}
    </div>
  );
};

export default StudentList;
