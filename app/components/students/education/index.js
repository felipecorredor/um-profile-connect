import { useFieldArray, useFormContext } from "react-hook-form";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

const EducationForm = () => {
  const methods = useFormContext();
  const { register, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  return (
    <>
      {fields.length > 0 && (
        <div className="d-flex justify-content-between">
          <h3>Educación</h3>
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
              {...register(`educations.${index}.university`)}
              placeholder="Institución educativa"
            />
          </Form.Group>
          <Form.Group as={InputGroup} className="col-md-6">
            <FormControl
              {...register(`educations.${index}.degree`)}
              placeholder="Titulo"
            />
          </Form.Group>

          <Form.Group as={InputGroup} className="col-md-12">
            <FormControl
              {...register(`educations.${index}.description`)}
              as="textarea"
              rows={3}
              placeholder="Descripción"
            />
          </Form.Group>

          <Button
            type="button"
            onClick={() => remove(index)}
            className="col-md-2 ml-1"
            variant="danger"
          >
            <i className="fas fa-trash" />
          </Button>
        </Form.Row>
      ))}

      {!fields.length && (
        <section className="mt-10">
          <h3>Educación</h3>
          <button
            className="theme-btn style-two small"
            type="button"
            onClick={() => {
              append({});
            }}
          >
            Agregar educación
          </button>
        </section>
      )}
    </>
  );
};

export default EducationForm;
