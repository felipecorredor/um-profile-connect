"use client";

import React from "react";
import StudentCard from "../components/students/list/studentCard";
import useSWR from "swr";
import { fetcher } from "@/sources/utils";
import ClientOnly from "../components/ClientOnly";

const StudentList = () => {
  const { data, error, isLoading } = useSWR("/api/students", fetcher);

  const students = data?.students || [];

  if (students.length === 0) {
    return (
      <ClientOnly>
        <p>No hay estudiantes</p>
      </ClientOnly>
    );
  }

  return (
    <div className="row">
      {students.map((student) => (
        <StudentCard student={student} key={student.id} />
      ))}
    </div>
  );
};

export default StudentList;
