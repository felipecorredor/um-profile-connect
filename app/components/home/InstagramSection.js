import {
  imgUniversity1,
  imgUniversity2,
  imgUniversity3,
  imgUniversity4,
  imgUniversity5,
  imgUniversity6,
} from "@/images";
import Image from "next/image";

const InstagramSection = () => {
  return (
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
  );
};

export default InstagramSection;
