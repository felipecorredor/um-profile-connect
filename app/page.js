import Link from "next/link";

import dynamic from "next/dynamic";
import Layout from "@/sources/layout/Layout";
import Index1WorkStepSlider from "@/app/components/slider/Index1WorkStepSlider";

const Index1Isotope = dynamic(
  () => import("@/app/components/isotope/Index1Isotope"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
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
            <div className="col-lg-5">
              <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">coach</span>
      </section>
      {/* Hero Section End */}
      {/* Features Section Start */}
      <section className="features-section rel z-1 pt-80 pb-40 bg-blue text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/features/icon1.png" alt="Icon" />
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
                  <img src="assets/images/features/icon2.png" alt="Icon" />
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
                  <img src="assets/images/features/icon1.png" alt="Icon" />
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
        <img
          className="rectangle-dots"
          src="assets/images/shapes/rectangle-dots.png"
          alt="Shape"
        />
        <img
          className="circle-dots"
          src="assets/images/shapes/circle-dots.png"
          alt="Shape"
        />
      </section>
      {/* Features Section End */}
      {/* About Section Start */}
      <section className="about-section pt-130 rpt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-end">
              <div className="about-man rmb-75 wow fadeInLeft delay-0-2s">
                <img src="assets/images/about/man.png" alt="Man" />
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
                <img
                  src="assets/images/instagram/instagram1.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram1.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/instagram/instagram2.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram2.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-3s">
                <img
                  src="assets/images/instagram/instagram3.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram3.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/instagram/instagram4.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram4.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-5s">
                <img
                  src="assets/images/instagram/instagram5.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram5.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="instagram-item wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/instagram/instagram6.jpg"
                  alt="Instagram"
                />
                <div className="instagram-hover">
                  <a href="assets/images/instagram/instagram6.jpg">
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
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
