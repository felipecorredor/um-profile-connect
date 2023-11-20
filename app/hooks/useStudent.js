import { isNotEmptyObject } from "@/sources/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

const useStudent = (errors) => {
  const router = useRouter();

  const updateStudent = useCallback(
    async (data) => {
      try {
        const response = await axios.put("/api/students", data);
        const student = response.data.student;
        router.refresh();
        toast.success("Perfil actualizado exitosamente");
        router.push(`/student?studentId=${student.id}`);
      } catch (error) {
        if (isNotEmptyObject(errors)) {
          toast.error("Revisa los campos obligatorios");
          return;
        }
        toast.error(error.message);
      }
    },
    [router, errors]
  );

  const createStudent = useCallback(
    async (data) => {
      try {
        const response = await axios.post("/api/students", data);
        const student = response.data.student;

        router.refresh();
        toast.success("Perfil creado exitosamente");
        router.push(`/student?studentId=${student.id}`);
      } catch (error) {
        if (isNotEmptyObject(errors)) {
          toast.error("Revisa los campos obligatorios");
          return;
        }
        toast.error(error.message);
      }
    },
    [router, errors]
  );

  return {
    updateStudent,
    createStudent,
  };
};

export default useStudent;
