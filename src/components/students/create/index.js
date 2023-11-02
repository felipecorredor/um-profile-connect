import React from "react";

import BasicForm from "../basic";
import { FormProvider, useForm } from "react-hook-form";
import SkillsForm from "../skills";
import ExperienceForm from "../experience";
import toast from "react-hot-toast";
import axios from "axios";
import EducationForm from "../education";
import ImageUpload from "../../inputs/image-upload";

const DEFAULT_VALUES = {
  skills: [
    {
      name: "",
    },
  ],
};

const CreateStudent = () => {
  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const setCustomValue = (id, value) => {
    methods.setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = (data) => {
    axios
      .post("/api/students/create", data)
      .then(async () => {
        toast.success("Perfil creado exitosamente");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const watchImageSrc = methods.watch("profilePictureUrl");

  console.log("watchImageSrc::", watchImageSrc);

  return (
    <FormProvider {...methods}>
      <div className="image mb-35">
        {/* <img
          src="assets/images/coachs/course-details.jpg"
          alt="Course Details"
        /> */}
        <ImageUpload
          onChange={(value) => setCustomValue("profilePictureUrl", value)}
          value={watchImageSrc}
        />
      </div>
      <div className="col-lg-12 pt-30 pb-30">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="faq-form"
          className="faq-form wow fadeInLeft delay-0-2s"
          name="faq-form"
        >
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
                Crear perfil <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateStudent;
