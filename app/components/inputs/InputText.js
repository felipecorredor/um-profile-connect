import React from "react";
import { Form, FormControl } from "react-bootstrap";

const InputText = ({
  type = "text",
  icon,
  name,
  min,
  max,
  placeholder,
  register,
  errors = {},
  ...rest
}) => {
  return (
    <Form.Group>
      <label htmlFor="full-name">
        <i className={icon} />
      </label>
      <FormControl
        type={type}
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
        {...register(name, {
          required: "Campo requerido",
          min: {
            value: min,
            message: "Debe ser mayor a 0",
          },
          max: {
            value: max,
            message: "Debe ser menor a 10",
          },
        })}
        {...rest}
      />
      <span className="form-error">
        {errors[name] && errors[name]?.message}
      </span>
    </Form.Group>
  );
};

export default InputText;
