import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  switch (footer) {
    case 1:
      return <Footer1 scrollTop={scrollTop} />;
    default:
      return <Footer1 scrollTop={scrollTop} />;
  }
};
export default Footer;
const FollowIcon = () => (
    <Fragment>
      <Link target="_blank" href="https://www.facebook.com/umanizales/">
        <i className="fab fa-facebook-f" />
      </Link>
      <Link target="_blank" href="https://twitter.com/#!/umanizales">
        <i className="fab fa-twitter" />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/school/universidad-de-manizales/?originalSubdomain=co">
        <i className="fab fa-linkedin-in" />
      </Link>
      <Link target="_blank" href="https://www.youtube.com/channel/UCBvdS_1CLDH4Jt5dTIEYKOg/videos">
        <i className="fab fa-youtube" />
      </Link>
    </Fragment>
  ),
  Courses = () => (
    <Fragment>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/oferta-academica?field_program_type_target_id=60">Pregrados</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/oferta-academica?combine=&field_program_type_target_id=61&field_faculty_target_id_entityreference_filter=All">Especializaciones</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/oferta-academica?combine=&field_program_type_target_id=58&field_faculty_target_id_entityreference_filter=All">Maestrías</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/oferta-academica?combine=&field_program_type_target_id=59&field_faculty_target_id_entityreference_filter=All">Doctorados</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/oferta-academica?combine=&field_program_type_target_id=94&field_faculty_target_id_entityreference_filter=All">Educación continuada</Link>
      </li>
      <li>
        <Link target="_blank" href="https://www.youtube.com/embed/xUnWyPfP8Uo">Video institucional</Link>
      </li>
    </Fragment>
  ),
  Resources = () => (
    <Fragment>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/reglamentos">Reglamentos</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/resoluciones">Resoluciones</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/gestion-integral">Gestión integral</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/politica-de-privacidad">Política de privacidad</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/derechos-pecuniarios-y-valores-de-matricula-pregrado-y-posgrado-vigencia-2023">Derechos pecuniarios y valores de matrícula</Link>
      </li>
      <li>
        <Link target="_blank" href="https://umanizales.edu.co/rutas-de-atencion">Rutas de atención</Link>
      </li>
    </Fragment>
  ),
  CopyRight = () => (
    <p>
      © {new Date().getFullYear()}. <Link href="https://umanizales.edu.co/" target="_blank">Universidad de Manizales</Link> Todos los derechos reservados.
    </p>
  ),
  Footer1 = ({ scrollTop }) => (
    <footer className="main-footer bg-blue text-white pt-75">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">Sobre nosotros</h5>
              <p>
              La Universidad Manizales es una institución educativa comprometida con la excelencia académica y la formación integral de sus estudiantes. 
              </p>
              <h5 className="pt-5">Síguenos</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Estudiar en la UMANIZALES</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Normativas</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5>Contáctanos</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> Cra 9 a # 19-03
                        Manizales, Caldas.
                        Colombia
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:contacto@umanizales.edu.co">contacto@umanizales.edu.co</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a href="callto:+0123456789">+57 606887 96 80</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-dark-blue rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </footer>
  );
