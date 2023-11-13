import { isNotEmptyObject } from "@/sources/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

const useStudent = errors => {
  const router = useRouter();

  const updateStudent = useCallback(
    data => {
      axios
        .put("/api/students", data)
        .then(async () => {
          toast.success("Perfil actualizado exitosamente");
          router.refresh();
        })
        .catch(error => {
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
    data => {
      axios
        .post("/api/students", data)
        .then(async () => {
          toast.success("Perfil creado exitosamente");
          router.refresh();
        })
        .catch(error => {
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
