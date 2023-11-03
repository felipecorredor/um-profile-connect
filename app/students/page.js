import StudentSearch from "@/app/components/students/list/studentSearch";

import ClientOnly from "@/app/components/ClientOnly";
import getStudents from "../actions/getStudents";
import Layout from "../layout/Layout";
import PageBanner from "../components/PageBanner";
import Pagination from "@/sources/Pagination";
import StudentList from "./studentList";

const StudentListPage = async () => {
  const students = await getStudents();

  if (students.length === 0) {
    return (
      <ClientOnly>
        <p>No hay estudiantes</p>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <StudentList students={students} />
    </ClientOnly>
  );
};
export default StudentListPage;
