import React from "react";
import { Button, Form } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";

const SkillsForm = () => {
  const methods = useFormContext();
  const {
    register,
    control,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="d-flex justify-content-between">
          <h3>Habilidades</h3>
          <Button
            type="button"
            variant="success"
            onClick={() => {
              append({});
            }}
          >
            <span className="mr-2">Agregar</span>
            <i className="fas fa-plus" />
          </Button>
        </div>
      )}
      <div>
        {fields.map((item, index) => {
          return (
            <div className="row" key={item.id}>
              <div className="col-md-7">
                <Form.Group key={item.id}>
                  <label htmlFor="full-name">
                    <i className="fas fa-user" />
                  </label>
                  <Form.Control
                    type="text"
                    {...register(`skills.${index}.name`, {
                      required: "Campo requerido",
                    })}
                    placeholder="Ej. React"
                    className="form-control"
                  />
                  {errors.skills?.[index]?.name && (
                    <span className="form-error">Campo requerido</span>
                  )}
                </Form.Group>
              </div>

              <div className="col-md-2">
                <Button
                  type="button"
                  className="w-100"
                  onClick={() => remove(index)}
                  variant="danger"
                >
                  <i className="fas fa-trash" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {!fields.length && (
        <section className="mt-10">
          <h3>Habilidades</h3>
          <button
            className="theme-btn style-two small"
            type="button"
            onClick={() => {
              append({});
            }}
          >
            Agregar habilidad
          </button>
        </section>
      )}
    </>
  );
};

export default SkillsForm;
