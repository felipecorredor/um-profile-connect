import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const ExperienceForm = () => {
  const methods = useFormContext();
  const { register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="d-flex justify-content-between">
          <h3>Experiencia</h3>
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

      {fields.map((item, index) => (
        <Form.Row key={item.id} className={`${index !== 0 && "pt-30"}`}>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.position`)}
              placeholder="Cargo"
            />
          </Form.Group>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.company`)}
              placeholder="Nombre de la empresa"
            />
          </Form.Group>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`experiences.${index}.location`)}
              placeholder="Ubicación"
            />
          </Form.Group>

          <div className="form-group col-md-6">
            <FormControl
              {...register(`experiences.${index}.typeEmployment`)}
              as="select"
              style={{ fontFamily: "unset" }}
              defaultValue=""
            >
              <option selected disabled>
                Tipo de empleo
              </option>
              <option value="full-time">Jornada completa</option>
              <option value="part-time">Jornada parcial</option>
              <option value="autonomous">Autónomo</option>
              <option value="temporary-contract">Contrato temporal</option>
              <option value="practice-contract">Contrato de practica</option>
            </FormControl>
          </div>

          <Form.Group as={InputGroup} className="col-md-12">
            <FormControl
              {...register(`experiences.${index}.description`)}
              placeholder="Descripción"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button
            type="button"
            onClick={() => remove(index)}
            className="col-md-2"
            variant="danger"
          >
            <i className="fas fa-trash" />
          </Button>
        </Form.Row>
      ))}

      {!fields.length && (
        <section className="mt-10">
          <h3>Experiencia</h3>
          <button
            className="theme-btn style-two small"
            type="button"
            onClick={() => {
              append({});
            }}
          >
            Agregar experiencia
          </button>
        </section>
      )}
    </>
  );
};

export default ExperienceForm;
