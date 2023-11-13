"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const BodyContent = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const registerModal = useRegisterModal();

  const onSubmit = data => {
    axios
      .post("/api/register", data)
      .then(async () => {
        try {
          await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
          });

          toast.success("Registro exitoso");
          registerModal.onClose();
          router.refresh();
        } catch (error) {
          toast.error("Fallo al registrarse, por favor intente de nuevo");
        }
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="appointment-form">
      <form onSubmit={handleSubmit(onSubmit)} method="post" action="#">
        <div className="form-group">
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            defaultValue=""
            placeholder="Nombre completo"
            required=""
          />
        </div>

        <div className="form-group">
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            defaultValue=""
            placeholder="Correo electrónico"
            required=""
          />
        </div>
        <div className="form-group">
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            defaultValue=""
            placeholder="Contraseña"
            required=""
          />
        </div>

        <div className="form-group">
          <Button type="submit" className="theme-btn">
            Registrarse
          </Button>
        </div>
      </form>
    </div>
  );
};

const Button = styled.button`
  width: 100%;
`;

export default BodyContent;
