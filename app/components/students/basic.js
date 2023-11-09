import React from "react";
import { useFormContext } from "react-hook-form";
import InputText from "../inputs/input-text";
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
      </div>
      <div className="col-sm-6">
        <InputText
          name="lastName"
          icon="fas fa-user"
          placeholder="Apellidos completos"
          register={register}
        />
      </div>

      <div className="col-sm-6">
        <InputText
          name="email"
          icon="fas fa-email"
          placeholder="Correo electrónico"
          register={register}
        />
      </div>

      <div className="col-sm-6">
        <InputText
          name="position"
          icon="fas fa-email"
          placeholder="Rol: ej. Frontend, Backend ..."
          register={register}
        />
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
            {...register("description")}
          />
        </div>
      </div>
    </Form.Row>
  );
};

export default BasicForm;
