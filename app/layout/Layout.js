"use client";

import { Fragment, useEffect, useState } from "react";
import niceSelect from "react-nice-select";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { animation } from "@/sources/utils";

const Layout = ({ children, header, footer, currentUser }) => {
  useEffect(() => {
    animation();

    niceSelect();
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <Fragment>
      <div className="page-wrapper">
        {/* Preloader */}
        {loading && <div className="preloader" />}
        {/* main header */}
        <Header header={header} currentUser={currentUser} />
        {/*Form Back Drop*/}
        <Sidebar />
        {/*End Hidden Sidebar */}
        {children}
        {/* Footer Area Start */}
        <Footer footer={footer} />
        {/* Footer Area End */}
      </div>
    </Fragment>
  );
};
export default Layout;
