import Link from "next/link";

const HeaderTop = () => (
  <div className="header-top bg-light-blue text-white">
    <div className="container-fluid">
      <div className="top-inner">
        <div className="top-left" />
        <div className="top-right d-flex align-items-center">
          <div className="social-style-two">
            <Link href="https://twitter.com/#!/umanizales" target="_blank">
              <i className="fab fa-twitter" />
            </Link>
            <Link href="https://www.facebook.com/umanizales/" target="_blank" >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link href="https://www.linkedin.com/school/universidad-de-manizales/?originalSubdomain=co" target="_blank">
              <i className="fab fa-linkedin-in" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCBvdS_1CLDH4Jt5dTIEYKOg/videos" target="_blank">
              <i className="fab fa-youtube" />
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
