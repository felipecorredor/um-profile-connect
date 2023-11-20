import { isNotEmptyObject } from "@/sources/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

const useStudent = (errors) => {
  const router = useRouter();

  const updateStudent = useCallback(
    (data, studentId) => {
      "studentId=6552575b78cf9b55f196ecad";
      axios
        .put("/api/students", data)
        .then(() => {
          toast.success("Perfil actualizado exitosamente");
          router.push(`/student?studentId=${studentId}`);
        })
        .catch((error) => {
          if (isNotEmptyObject(errors)) {
            toast.error("Revisa los campos obligatorios");
            return;
          }
          toast.error(error.message);
        });
    },
    [router, errors]
  );

  const createStudent = useCallback(
    (data, studentId) => {
      axios
        .post("/api/students", data)
        .then(() => {
          toast.success("Perfil creado exitosamente");
          router.push(`/student?studentId=${studentId}`);
        })
        .catch((error) => {
          if (isNotEmptyObject(errors)) {
            toast.error("Revisa los campos obligatorios");
            return;
          }
          toast.error(error.message);
        });
    },
    [router, errors]
  );

  return {
    updateStudent,
    createStudent,
  };
};

export default useStudent;
