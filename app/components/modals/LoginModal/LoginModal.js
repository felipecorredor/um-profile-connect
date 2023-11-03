import React from "react";
import CustomModal from "../Modal";

import useLoginModal from "../../../../hooks/useLoginModal";
import BodyContent from "./BodyContent";

const LoginModal = () => {
  const loginModal = useLoginModal();

  return (
    <div>
      <CustomModal
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        title="Iniciar Sesión"
        subtitle="Register Here"
        body={<BodyContent />}
      />
    </div>
  );
};

export default LoginModal;
