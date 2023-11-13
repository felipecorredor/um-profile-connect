import Link from "next/link";
import Layout from "../layout/Layout";
import PageBanner from "../components/PageBanner";
import CreateStudent from "../components/students/create";
import Image from "next/image";
import imgLineShape from "../../public/assets/images/shapes/line-shape.png"
import imgCouseAuthor from "../../public/assets/images/coachs/couse-author.jpg"
import imgVideo from "../../public/assets/images/universidad/video.jpg"

const CourseDetails = () => {
  return (
    <Layout>
      <PageBanner pageName={"Crear Perfil"} />
      <section className="course-details-area pt-130 rpt-100">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="course-header">
                  <span className="category">Universidad de Manizales</span>
                  <Image src={imgLineShape} alt="Line" />
                </div>
                <h2>Crea tu perfil</h2>
                <ul className="author-date-enroll">
                  <li>
                    <Image 
                      src={imgCouseAuthor}
                      alt="Authro"
                    />
                    <h6>Donald J. Miller</h6>
                  </li>
                  <li>
                    <i className="fas fa-cloud-upload-alt" /> Last Update
                    February 15, 2022
                  </li>
                </ul>

                <section>
                  <h3>Información principal</h3>
                  <CreateStudent />
                </section>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar rmt-75">
                <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                  <div className="widget-video">
                    <Image width={312} height={175}
                      src={imgVideo}
                      alt="Course Details"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=s_Ye8J7KGq8"
                      className="mfp-iframe youtube-video-play" target="_blank"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="price-off">
                    <span className="price">Facultad de Ciencias e Ingenieria</span>
                  </div>
                  <h6>
                    Contamos con una amplia variedad de programa
                  </h6>
                  <ul className="course-details-list mb-25">
                    <li>
                      <Link href="https://umanizales.edu.co/oferta-academica/ingenieria-de-sistemas-y-telecomunicaciones" target="_blank">
                      <span>Ingeniería de sistemas y telecomunicaciones</span>
                      </Link>
                      
                    </li>
                    <li>
                      <Link href="https://umanizales.edu.co/oferta-academica/ingenieria-en-analitica-de-datos">
                      <span>Ingeniería en analítica de datos</span>
                      </Link>
                      
                    </li>
                    <li>
                      <Link href="https://umanizales.edu.co/oferta-academica/ingenieria-en-seguridad-de-la-informacion" target="_blank">
                      <span>Ingeniería en seguridad de la información</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://umanizales.edu.co/oferta-academica/ingenieria-logistica" target="_blank">
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
    </Layout>
  );
};
export default CourseDetails;
