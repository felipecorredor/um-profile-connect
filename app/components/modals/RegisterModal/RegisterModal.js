"use client";

import React from "react";
import CustomModal from "../Modal";

import BodyContent from "./BodyContent";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import FooterContent from "./FooterContent";

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
        footer={<FooterContent />}
      />
    </div>
  );
};

export default RegisterModal;
