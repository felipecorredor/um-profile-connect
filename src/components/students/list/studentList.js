import React from "react";
import StudentCard from "./studentCard";
import getStudents from "@/app/actions/getStudents";
import ClientOnly from "../../ClientOnly";

const StudentList = async () => {
  const students = await getStudents();

  console.log("students::", students);

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
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
