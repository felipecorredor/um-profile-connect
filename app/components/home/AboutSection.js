import { imgMan } from "@/images";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
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
                          Ofrecemos programas académicos avanzados para impulsar
                          el éxito en ciencia e ingeniería.
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
                          altamente cualificados en el campo de la ciencia y la
                          ingeniería.
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
  );
};

export default AboutSection;
