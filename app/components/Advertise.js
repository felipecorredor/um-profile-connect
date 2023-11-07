import advertise1 from "/public/assets/images/advertise/1.png";

const Advertise = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div className="advertise-item wow fadeInUp delay-0-2s">
          <div className="content">
            <h4>Encuentra Tu Futuro Profesional</h4>
            <p>
              En la Universidad Manizales, creemos en tu potencial.Regístrate
              hoy y comienza tu viaje hacia una carrera exitosa.
            </p>
          </div>
          <div className="image">
            <img src={advertise1.src} alt="Advertise" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advertise;
