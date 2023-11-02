import React from "react";
import { Form, FormControl } from "react-bootstrap";

const InputText = ({ icon, name, placeholder, register }) => {
  return (
    <Form.Group>
      <label htmlFor="full-name">
        <i className={icon} />
      </label>
      <FormControl
        type="text"
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
    </Form.Group>
  );
};

export default InputText;
