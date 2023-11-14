"use client";

import PageBanner from "@/app/components/PageBanner";

import { fetcher, formatDateTime } from "@/sources/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import imgVideo from "/public/assets/images/universidad/video.jpg";

import useSWR from "swr";

const StudentPage = () => {
  const searchParams = useSearchParams();

  const studentId = searchParams.get("studentId");

  const { data, error, isLoading } = useSWR(
    `/api/students/${studentId}`,
    fetcher
  );

  const student = data?.student;

  if (error && !isLoading) {
    return <div>Error...</div>;
  }

  if (!student && !isLoading) {
    return <div>student not found</div>;
  }

  if (isLoading && !student) {
    return <div className="preloading" />;
  }

  const createdAt = formatDateTime(student.createdAt);

  return (
    <>
      <PageBanner pageName={"Detalle del estudiante"} />
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">{student.position}</span>
                  <Image
                    src="/assets/images/shapes/line-shape.png"
                    alt="Line"
                    height={60}
                    width={60}
                  />
                </div>
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
                <ul className="author-date-enroll">
                  <li>
                    <Image
                      src={student.imageSrc}
                      alt="Universidad de Manizales"
                      height={200}
                      width={200}
                    />
                    <h6>
                      {student.firstName} {student.lastName}
                    </h6>
                  </li>
                  <li>
                    <i className="far fa-user" /> {student.semester} Semestre
                  </li>
                  <li>
                    <i className="fas fa-cloud-upload-alt" /> Actualización:{" "}
                    {createdAt}
                  </li>
                </ul>
                <div className="image mb-35">
                  <Image
                    src={student.imageSrc}
                    alt="Universidad de Manizales"
                    height={350}
                    width={700}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{student.description}</p>
                <h3 className="mt-40">Habilidades</h3>
                <div className="widget-menu">
                  <ul className="list-style-two mb-45">
                    {student?.skills.map((skill, index) => (
                      <li key={index}>{skill.name}</li>
                    ))}
                  </ul>
                </div>

                <h3>Experiencia</h3>
                <ul className="student-experiences-list wow fadeInUp delay-0-2s">
                  {student?.experiences?.map((experience, index) => (
                    <div key={index} className="experience-card">
                      <h3 className="experience-position">
                        {experience.position}
                      </h3>
                      <p className="experience-company">
                        <b>Empresa:</b> {experience.company}
                      </p>
                      <p className="experience-location">
                        <b>Ubicación:</b> {experience.location}
                      </p>
                      <p className="experience-type">
                        <b>Tipo de empleo:</b> {experience.typeEmployment}
                      </p>
                      <p className="experience-description">
                        <b>Descripción:</b> {experience.description}
                      </p>
                    </div>
                  ))}
                </ul>

                <div className="mt-45">
                  <h3>Educación</h3>
                  <ul className="student-experiences-list wow fadeInUp delay-0-2s">
                    {student?.educations?.map((education, index) => (
                      <div key={index} className="experience-card">
                        <h3 className="experience-position">
                          {education.university}
                        </h3>
                        <p className="experience-company">
                          <b>Titulo:</b> {education.degree}
                        </p>
                        <p className="experience-location">
                          <b>Descripción:</b> {education.description}
                        </p>
                      </div>
                    ))}
                  </ul>
                </div>

                <div className="mt-45">
                  <h3>Detalles</h3>
                  <div className="course-instructor pt-10 pb-55 wow fadeInUp delay-0-2s">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="instructor-image">
                          <Image
                            src={student.imageSrc}
                            alt="estudiante Universidad de Manizales"
                            width={600}
                            height={250}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="instructor-details">
                          <h4>
                            {student.firstName} {student.lastName}
                          </h4>
                          <span className="designations">
                            {student.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                  <div className="widget-video">
                    <Image
                      width={312}
                      height={175}
                      src={imgVideo}
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=s_Ye8J7KGq8"
                      className="mfp-iframe youtube-video-play"
                      target="_blank"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">
                      Facultad de Ciencias e Ingenieria
                    </span>
                  </div>
                  <h6>Contamos con una amplia variedad de programa</h6>
                  <ul className="course-details-list mb-25">
                    <li>
                      <Link
                        href="https://umanizales.edu.co/oferta-academica/ingenieria-de-sistemas-y-telecomunicaciones"
                        target="_blank"
                      >
                        <span>Ingeniería de sistemas y telecomunicaciones</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://umanizales.edu.co/oferta-academica/ingenieria-en-analitica-de-datos">
                        <span>Ingeniería en analítica de datos</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://umanizales.edu.co/oferta-academica/ingenieria-en-seguridad-de-la-informacion"
                        target="_blank"
                      >
                        <span>Ingeniería en seguridad de la información</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://umanizales.edu.co/oferta-academica/ingenieria-logistica"
                        target="_blank"
                      >
                        <span>Ingeniería en logística</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
    </>
  );
};
export default StudentPage;
