import React from "react";
import CustomModal from "../Modal";
import useRegisterModal from "../../../../hooks/useRegisterModal";
import BodyContent from "./BodyContent";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  return (
    <div>
      <CustomModal
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        title="Crear una cuenta"
        subtitle="Register Here"
        body={<BodyContent />}
      />
    </div>
  );
};

export default RegisterModal;
