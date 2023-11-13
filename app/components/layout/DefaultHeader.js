import { Fragment } from "react";
import HeaderTop from "./HeaderTop";
import Link from "next/link";
import Image from "next/image";
import Menus from "./Menus";
import MobileHeader from "./MobileHeader";
import { signOut } from "next-auth/react";

const DefaultHeader = ({
  navToggle,
  setNavToggle,
  onOpenRegister,
  onOpenLogin,
  hasSession,
}) => (
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
                  <Image
                    width={110}
                    height={80}
                    src="assets/images/universidad/Logo-UManizales-blanco.svg"
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
                      <Image
                        src="/assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                        fill
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
            <div
              className="menu-btn-sidebar d-flex align-items-center"
              onClick={() => setNavToggle(!navToggle)}
            >
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
              {navToggle && (
                <div className="dropdown-content">
                  {hasSession ? (
                    <a onClick={() => signOut()}>Cerrar sesión</a>
                  ) : (
                    <>
                      <a onClick={onOpenLogin}>Iniciar sesión</a>
                      <a onClick={onOpenRegister}>Registrarse</a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/*End Header Upper*/}
    </header>
  </Fragment>
);
export default DefaultHeader;
