import { imgCircle, imgIcon1, imgIcon2, imgRectangle } from "@/images";
import Image from "next/image";

const FeatureSection = () => {
  return (
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
                  Descubre estudiantes que están listos para dar forma al futuro
                  de tu empresa.
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
                  Explora estudiantes con habilidades excepcionales listos para
                  hacer brillar tu empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image className="rectangle-dots" src={imgRectangle} alt="Shape" />
      <Image className="circle-dots" src={imgCircle} alt="Shape" />
    </section>
  );
};

export default FeatureSection;
