import Link from "next/link";

const HeaderTop = () => (
  <div className="header-top bg-light-blue text-white">
    <div className="container-fluid">
      <div className="top-inner">
        <div className="top-left" />
        <div className="top-right d-flex align-items-center">
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
          <ul className="top-menu">
            <li>
              <Link target="_blank" href="https://umanizales.edu.co">
                Universidad de Manizales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderTop;
