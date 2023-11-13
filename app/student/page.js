"use client";

import PageBanner from "@/app/components/PageBanner";
import Layout from "@/app/layout/Layout";
import { fetcher } from "@/sources/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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

  return (
    <Layout>
      <PageBanner pageName={"Detalle del estudiante"} />
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Web Design</span>
                  <img src="assets/images/shapes/line-shape.png" alt="Line" />
                  <span className="off">30% off</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(50)</span>
                  </div>
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
                    <h6>Donald J. Miller</h6>
                  </li>
                  <li>
                    <i className="fas fa-cloud-upload-alt" /> Last Update
                    {student.createdAt}
                  </li>
                  <li>
                    <i className="far fa-user" /> 25 Enrolled
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
                    <div className="row align-items-center">
                      <div className="col-sm-5">
                        <div className="instructor-image">
                          <Image
                            src={student.imageSrc}
                            alt="estudiante Universidad de Manizales"
                            width={600}
                            height={300}
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

                          <p>
                            Sit amet consectet adipising elit sed do eiusmod
                            incididunt ut labore et dolore magna. Lorem Ipsum es
                            simplemente el texto de relleno de las imprentas y
                            archivos de texto. Lorem Ipsum ha sido el texto de
                            relleno estándar de las industrias desde el año 1500
                          </p>
                          <h5>Follow Me</h5>
                          <div className="social-style-two">
                            <Link href="/contact">
                              <i className="fab fa-twitter" />
                            </Link>
                            <Link href="/contact">
                              <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="/contact">
                              <i className="fab fa-instagram" />
                            </Link>
                            <Link href="/contact">
                              <i className="fab fa-pinterest-p" />
                            </Link>
                          </div>
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
                    <img
                      src="assets/images/widgets/course-details.jpg"
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe youtube-video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">259.83</span>
                    <span className="off">25% off</span>
                  </div>
                  <ul className="course-details-list mb-25">
                    <li>
                      <i className="far fa-file-alt" />{" "}
                      <span>Course Level</span> <b>Beginner</b>
                    </li>
                    <li>
                      <i className="far fa-clock" /> <span>Duration</span>{" "}
                      <b>25.5 Hr</b>
                    </li>
                    <li>
                      <i className="far fa-play-circle" /> <span>Lectures</span>{" "}
                      <b>9 Lectures</b>
                    </li>
                    <li>
                      <i className="far fa-clipboard" /> <span>Subject</span>{" "}
                      <b>Web Design</b>
                    </li>
                    <li>
                      <i className="fas fa-globe" /> <span>Language</span>{" "}
                      <b>English</b>
                    </li>
                  </ul>
                  <p>
                    Sit amet consectetur adipiscin sed eiusmod tempor incidide
                  </p>
                  <Link className="theme-btn" href="/contact">
                    add to cart <i className="fas fa-arrow-right" />
                  </Link>
                  <div className="social-style-two d-flex">
                    <Link href="/contact">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link href="/contact">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Details End */}
    </Layout>
  );
};
export default StudentPage;
