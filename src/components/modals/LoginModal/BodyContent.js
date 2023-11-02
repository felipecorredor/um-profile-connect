import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

const BodyContent = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        toast.success("Logged in");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="appointment-form">
      <form onSubmit={handleSubmit(onSubmit)} method="post" action="#">
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
