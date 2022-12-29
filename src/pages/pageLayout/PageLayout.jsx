import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavbar, Footer } from "../../component/@Layout";

const Layout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
