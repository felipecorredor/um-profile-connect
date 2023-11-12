"use client";

import React from "react";
import CustomModal from "../Modal";

import BodyContent from "./BodyContent";
import useLoginModal from "@/app/hooks/useLoginModal";

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
