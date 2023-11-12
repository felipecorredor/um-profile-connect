"use client";

import React from "react";
import StudentCard from "../components/students/list/studentCard";
import useSWR from "swr";
import { fetcher } from "@/sources/utils";
import ClientOnly from "../components/ClientOnly";

const StudentList = () => {
  const { data, error, isLoading } = useSWR("/api/students", fetcher);

  const students = data?.students || [];

  if (students.length === 0 && !isLoading) {
    return (
      <ClientOnly>
        <p>No hay estudiantes</p>
      </ClientOnly>
    );
  }

  if (error && !isLoading) {
    return <div>Error...</div>;
  }

  if (isLoading) {
    return <div className="preloading" />;
  }

  return (
    <>
      <div className="shop-shorter mb-40 wow fadeInUp delay-0-2s">
        <div className="sort-text">
          <b>{students.length}</b> perfiles asombrosos esperando para ser
          descubiertos. ¡Nuestra comunidad de estudiantes está llena de talento
          y diversidad! 🌟
        </div>
      </div>
      <div className="row">
        {students.map((student) => (
          <StudentCard student={student} key={student.id} />
        ))}
      </div>
    </>
  );
};

export default StudentList;
