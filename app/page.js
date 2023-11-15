import Link from "next/link";

import dynamic from "next/dynamic";

import Layout from "./layout/Layout";
import Index1WorkStepSlider from "./components/slider/Index1WorkStepSlider";
import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import imgMan from "../public/assets/images/universidad/alumno2.webp";
import imgHeroRight from "../public/assets/images/hero/hero-right.png";
import imgIcon1 from "../public/assets/images/features/icon1.png";
import imgIcon2 from "../public/assets/images/features/icon2.png";
import imgUniversity1 from "../public/assets/images/universidad/img7.jpeg";
import imgUniversity2 from "../public/assets/images/universidad/img9.jpg";
import imgUniversity3 from "../public/assets/images/universidad/img10.jpg";
import imgUniversity4 from "../public/assets/images/universidad/img12.jpg";
import imgUniversity5 from "../public/assets/images/universidad/img13.jpg";
import imgUniversity6 from "../public/assets/images/universidad/img14.jpg";
import imgRectangle from "../public/assets/images/shapes/rectangle-dots.png";
import imgCircle from "../public/assets/images/shapes/circle-dots.png";

const Index1Isotope = dynamic(
  () => import("@/app/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const Home = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Layout header={1} footer={1} currentUser={currentUser}>
      <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content rpt-25 rmb-75">
                <h1 className="mb-20 wow fadeInUp delay-0-4s">
                  Descubre Futuros Profesionales
                </h1>
                <p className="wow fadeInUp delay-0-6s">
                  ¡Bienvenido a nuestra plataforma donde podrás descubrir los
                  perfiles de nuestros talentosos estudiantes, destacados por
                  sus excelentes habilidades y cualidades únicas!
                </p>
                <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                  <Link className="theme-btn" href="/course-grid">
                    Empieza a Contratar Talentos{" "}
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                <Image src={imgHeroRight} alt="Hero" class="imgHero"/>
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">UNIVERSIDAD</span>
      </section>
      {/* Hero Section End */}
      {/* Features Section Start */}
      <section className="features-section rel z-1 pt-80 pb-40 bg-blue text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Image src={imgIcon1} alt="Icon" />
                </div>
                <div className="content">
                  <h4>Explora el Talento Estudiantil</h4>
                  <p>
                    Descubre estudiantes con ideas frescas y creatividad para
                    impulsar tu empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Image src={imgIcon2} alt="Icon" />
                </div>
                <div className="content">
                  <h4>Conoce Futuros Profesionales</h4>
                  <p>
                    Descubre estudiantes que están listos para dar forma al
                    futuro de tu empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Image src={imgIcon1} alt="Icon" />
                </div>
                <div className="content">
                  <h4>Perfiles Universitarios Destacados</h4>
                  <p>
                    Explora estudiantes con habilidades excepcionales listos
                    para hacer brillar tu empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image className="rectangle-dots" src={imgRectangle} alt="Shape" />
        <Image className="circle-dots" src={imgCircle} alt="Shape" />
      </section>
      {/* Features Section End */}
      {/* About Section Start */}
      <section className="about-section pt-130 rpt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-end">
              <div className="about-man rmb-75 wow fadeInLeft delay-0-2s">
                <Image src={imgMan} alt="Man" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-25">Sobre nosotros</span>
                  <h2>Facultad de Ciencias e ingeniería</h2>
                </div>
                <div className="about-features">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Programas Académicos Destacados</h5>
                          <p>
                            Ofrecemos programas académicos avanzados para
                            impulsar el éxito en ciencia e ingeniería.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Nuestros Profesores y Expertos</h5>
                          <p>
                            Contamos con un equipo de profesores y expertos
                            altamente cualificados en el campo de la ciencia y
                            la ingeniería.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item">
                        <div className="icon">
                          <i className="fas fa-check" />
                        </div>
                        <div className="content">
                          <h5>Educación de Calidad</h5>
                          <p>
                            Nuestros programas académicos destacados te ofrecen
                            una educación de primera en ciencia e ingeniería,
                            impulsándote hacia un futuro exitoso.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Coach Section Start */}
      <Index1Isotope />
      {/* Coach Section End */}
      {/* Work Process Section Start */}
      <section className="work-process-section bg-white rel z-1 pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <Index1WorkStepSlider />
        </div>
      </section>
      {/* Work Process Section End */}

      {/* Instagram Section Start */}
      <div className="instagram-section pb-120 rpb-90">
        <div className="container-fluid">
          <div className="row small-gap justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-1s">
                <Image src={imgUniversity1} alt="UManizales" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-2s">
                <Image src={imgUniversity2} alt="UManizales" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-3s">
                <Image src={imgUniversity3} alt="UManizales" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-4s">
                <Image src={imgUniversity4} alt="UManizles" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-5s">
                <Image src={imgUniversity5} alt="UManizales" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-6s">
                <Image src={imgUniversity6} alt="UManizales" />
                <div className="instagram-hover">
                  <a href="https://umanizales.edu.co/" target="_blank">
                    <i className="fas fa-link" />
                    <span>Visitar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
