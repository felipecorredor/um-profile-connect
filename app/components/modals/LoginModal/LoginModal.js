"use client";

import React from "react";
import CustomModal from "../Modal";

import BodyContent from "./BodyContent";
import useLoginModal from "@/app/hooks/useLoginModal";
import FooterContent from "./FooterContent";

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
        footer={<FooterContent />}
      />
    </div>
  );
};

export default LoginModal;
