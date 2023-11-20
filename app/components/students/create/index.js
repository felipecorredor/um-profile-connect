"use client";

import React, { useMemo } from "react";

import BasicForm from "../basic";
import { FormProvider, useForm } from "react-hook-form";
import SkillsForm from "../skills";
import ExperienceForm from "../experience";
import toast from "react-hot-toast";
import EducationForm from "../education";
import ImageUpload from "../../inputs/ImageUpload";

import useStudent from "@/app/hooks/useStudent";

const CreateStudent = ({ student }) => {
  const hasStudent = useMemo(() => student?.id, [student?.id]);

  const methods = useForm({
    defaultValues: student,
  });

  const errors = methods.formState.errors;

  const { createStudent, updateStudent } = useStudent(errors);

  const setCustomValue = (id, value) => {
    methods.setValue(id, value);
  };

  const onSubmit = (data) => {
    if (!data?.imageSrc) {
      methods.setError("imageSrc", {
        type: "custom",
        message: "La imagen de perfil requerida",
      });
      toast.error("La imagen de perfil es requerida");
      return;
    }

    hasStudent
      ? updateStudent(data, student.id)
      : createStudent(data, student.id);
  };

  const watchImageSrc = methods.watch("imageSrc");

  return (
    <FormProvider {...methods}>
      <div className="col-lg-12 pt-30 pb-30">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="faq-form"
          className="faq-form wow fadeInLeft delay-0-2s"
          name="faq-form"
        >
          <div className="image mb-35">
            <ImageUpload
              onChange={(value) => setCustomValue("imageSrc", value)}
              value={watchImageSrc}
            />
            {errors?.imageSrc && (
              <span className="form-error">{errors?.imageSrc?.message}</span>
            )}
          </div>
          <div>
            <section>
              <BasicForm />
            </section>
            <section className="pb-50">
              <SkillsForm />
            </section>
            <section className="pb-50">
              <ExperienceForm />
            </section>
            <section className="pb-50">
              <EducationForm />
            </section>

            <div className="d-flex justify-content-center">
              <button type="submit" className="theme-btn">
                {hasStudent ? "Actualizar curriculum" : "Crear curriculum"}{" "}
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateStudent;
