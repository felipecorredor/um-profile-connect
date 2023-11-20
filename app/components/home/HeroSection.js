import { imgHeroRight } from "@/images";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
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
                perfiles de nuestros talentosos estudiantes, destacados por sus
                excelentes habilidades y cualidades únicas!
              </p>
              <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                <Link className="theme-btn" href="/students">
                  Empieza a Contratar Talentos{" "}
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
              <Image src={imgHeroRight} alt="Hero" class="imgHero" />
            </div>
          </div>
        </div>
      </div>
      <span className="bg-text">UNIVERSIDAD</span>
    </section>
  );
};

export default HeroSection;
