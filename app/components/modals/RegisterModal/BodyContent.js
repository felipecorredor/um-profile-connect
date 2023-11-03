import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const BodyContent = () => {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    axios
      .post("/api/register", data)
      .then(async () => {
        toast.success("Registrado");
        try {
          await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
          });

          router.push("/");
        } catch (error) {
          toast.error("Fallo al iniciar sesión");
        }
      })
      .catch((error) => {
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
            placeholder="Complete Name"
            required=""
          />
        </div>

        <div className="form-group">
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            defaultValue=""
            placeholder="Email"
            required=""
          />
        </div>
        <div className="form-group">
          <input
            {...register("password", { required: true })}
            type="password"
            name="password"
            defaultValue=""
            placeholder="Password"
            required=""
          />
        </div>

        <div className="form-group">
          <button type="submit" className="theme-btn">
            Submit now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyContent;
