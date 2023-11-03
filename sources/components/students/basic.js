import React from "react";
import { useFormContext } from "react-hook-form";
import InputText from "../inputs/input-text";
import InputDate from "../inputs/input-date";
import { Form } from "react-bootstrap";

const BasicForm = () => {
  const methods = useFormContext();

  const { register } = methods;

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
        <InputDate
          name="dateOfBirth"
          icon="fas fa-email"
          placeholder="Fecha de nacimiento"
          register={register}
        />
      </div>
      <div className="col-sm-6">
        <InputText
          name="phoneNumber"
          icon="fas fa-email"
          placeholder="Numero celular"
          register={register}
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
