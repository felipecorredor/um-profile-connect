"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";

const BodyContent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const loginModal = useLoginModal();

  const onSubmit = data => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then(callback => {
      if (callback?.ok) {
        toast.success("Logged in");
        loginModal.onClose();
        router.refresh();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="appointment-form">
      <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
        <div className="form-group">
          <input
            {...register("email", { required: "El email es requerido" })}
            type="email"
            name="email"
            defaultValue=""
            placeholder="Email"
            required=""
          />
          <span className="form-error">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div className="form-group">
          <input
            {...register("password", {
              required: "La contraseña es requerida",
            })}
            type="password"
            name="password"
            defaultValue=""
            placeholder="Password"
            required=""
          />
          <span className="form-error">
            {errors.password && errors.password.message}
          </span>
        </div>

        <div className="form-group">
          <Button type="submit" className="theme-btn">
            Iniciar sesión
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
