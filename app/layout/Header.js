import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import { stickyNav } from "../utils";

const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  const [navToggle, setNavToggle] = useState(false);

  switch (header) {
    case 1:
      return (
        <Header1
          navToggle={navToggle}
          setNavToggle={setNavToggle}
          onOpenRegister={() => {}}
          onOpenLogin={() => {}}
        />
      );

    default:
      return (
        <DefaultHeader navToggle={navToggle} setNavToggle={setNavToggle} />
      );
  }
};
export default Header;
const Header1 = ({ navToggle, setNavToggle, onOpenRegister, onOpenLogin }) => (
    <Fragment>
      <header className="main-header">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-green br-10 p-15">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div
                className="menu-btn-sidebar d-flex align-items-center"
                onClick={() => setNavToggle(!navToggle)}
              >
                <button>
                  <i className="far fa-user-circle" />
                </button>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button id="dropdown-item-button" title="Dropdown button">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                {navToggle && (
                  <div className="dropdown-content">
                    <a onClick={onOpenLogin}>Iniciar sesión</a>
                    <a onClick={onOpenRegister}>Registrarse</a>
                    <a href="#">Cerrar sesión</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  DefaultHeader = ({ navToggle, setNavToggle }) => (
    <Fragment>
      <header className="main-header header-two">
        {/* Header-Top */}
        <HeaderTop />
        {/* Header-Upper */}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo bg-green br-10 p-15">
                      <Link href="/">
                        <img
                          src="assets/images/logos/logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>
                    {/* Toggle Button */}
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                      onClick={() => setNavToggle(!navToggle)}
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className={`navbar-collapse collapse clearfix ${
                      navToggle ? "show" : ""
                    }`}
                  >
                    <Menus />
                    <MobileHeader />
                  </div>
                </nav>
                {/* Main Menu End*/}
              </div>
              {/* Menu Button */}
              <div className="menu-btn-sidebar d-flex align-items-center">
                <button>
                  <i className="far fa-user-circle" />
                </button>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
      </header>
    </Fragment>
  ),
  Menus = () => (
    <ul className="navigation clearfix d-none d-lg-flex">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">Acerca</Link>
      </li>
      <li>
        <Link href="/faqs">Faqs</Link>
      </li>
      <li>
        <Link href="/students">Estudiantes</Link>
      </li>
      <li>
        <Link href="/curriculum">Crear perfil</Link>
      </li>
    </ul>
  ),
  HeaderTop = () => (
    <div className="header-top bg-light-blue text-white">
      <div className="container-fluid">
        <div className="top-inner">
          <div className="top-left">
            <p>
              <i className="far fa-clock" /> <b>Working Hours</b> : Manday -
              Friday, 08am - 05pm
            </p>
          </div>
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
                <Link href="/about">Setting &amp; Privacy</Link>
              </li>
              <li>
                <Link href="/faqs">Faqs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
