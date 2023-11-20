import React from "react";
import { useFormContext } from "react-hook-form";
import InputText from "../inputs/InputText";
import { Form } from "react-bootstrap";

const BasicForm = () => {
  const methods = useFormContext();

  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <Form.Row>
      <div className="col-sm-6">
        <InputText
          name="firstName"
          icon="fas fa-user"
          placeholder="Nombres completos"
          register={register}
        />
        {errors?.firstName && (
          <span className="form-error">{errors?.firstName?.message}</span>
        )}
      </div>
      <div className="col-sm-6">
        <InputText
          name="lastName"
          icon="fas fa-user"
          placeholder="Apellidos completos"
          register={register}
        />
        {errors?.lastName && (
          <span className="form-error">{errors?.lastName?.message}</span>
        )}
      </div>

      <div className="col-sm-6">
        <InputText
          name="email"
          icon="fas fa-email"
          placeholder="Correo electrónico"
          register={register}
        />
        {errors?.email && (
          <span className="form-error">{errors?.email?.message}</span>
        )}
      </div>

      <div className="col-sm-6">
        <InputText
          name="position"
          icon="fas fa-email"
          placeholder="Rol: ej. Frontend, Backend ..."
          register={register}
        />
        {errors?.position && (
          <span className="form-error">{errors?.position?.message}</span>
        )}
      </div>
      <div className="col-sm-6">
        <InputText
          type="number"
          min={0}
          max={10}
          name="semester"
          icon="fas fa-email"
          placeholder="Semestre"
          register={register}
          errors={errors}
        />
        {errors?.semester && (
          <span className="form-error">{errors?.semester?.message}</span>
        )}
      </div>

      <div className="col-sm-12">
        <div className="form-group">
          <label htmlFor="message">
            <i className="fas fa-pencil-alt" />
          </label>
          <Form.Control
            name="description"
            as="textarea"
            className="form-control"
            rows={4}
            placeholder="Cuéntanos acerca de ti"
            {...register("description", { required: "Campo requerido" })}
          />
          {errors?.description && (
            <span className="form-error">{errors?.description?.message}</span>
          )}
        </div>
      </div>
    </Form.Row>
  );
};

export default BasicForm;
