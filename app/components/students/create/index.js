"use client";

import React from "react";

import BasicForm from "../basic";
import { FormProvider, useForm } from "react-hook-form";
import SkillsForm from "../skills";
import ExperienceForm from "../experience";
import toast from "react-hot-toast";
import axios from "axios";
import EducationForm from "../education";
import ImageUpload from "../../inputs/image-upload";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const DEFAULT_VALUES = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  dateOfBirth: "1990-05-15",
  phoneNumber: "+1 (555) 123-4567",
  description:
    "I am a dedicated professional with a strong background in software development. I have a passion for creating innovative solutions and thrive in collaborative team environments. My goal is to continue honing my skills and contributing to exciting projects in the tech industry.",

  skills: [
    {
      name: "React",
      name: "JavaScript",
    },
  ],
  educations: [
    {
      university: "Stanford University",
      degree: "Bachelor of Science in Computer Science",
      description:
        "My goal is to graduate with a Bachelor of Science in Computer Science from Stanford University, and leverage this knowledge to pursue a career in software development, where I can contribute to cutting-edge projects and innovation.",
    },
    {
      university: "Harvard Business School",
      degree: "Master of Business Administration (MBA)",
      description:
        "I aspire to complete my MBA at Harvard Business School, equipping myself with the skills and knowledge required to excel in the field of business and entrepreneurship. My goal is to lead and transform organizations, driving strategic growth and innovation.",
    },
  ],
  experiences: [
    {
      position: "Software Engineer",
      company: "Tech Innovators Inc.",
      location: "San Francisco, CA",
      typeEmployment: "Full-time",
      description:
        "Seeking a challenging role as a Software Engineer at Tech Innovators Inc. to work on cutting-edge projects and contribute to the development of innovative software solutions.",
    },
    {
      position: "Marketing Manager",
      company: "Global Marketing Agency",
      location: "New York, NY",
      typeEmployment: "Contract",
      description:
        "Looking for a Marketing Manager position at Global Marketing Agency. Excited to lead marketing campaigns and drive growth for clients while leveraging my strategic and creative skills.",
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
      .post("/api/students", data)
      .then(async () => {
        toast.success("Perfil creado exitosamente");
        revalidateTag("students");
        redirect(`students`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const watchImageSrc = methods.watch("profilePictureUrl");

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
