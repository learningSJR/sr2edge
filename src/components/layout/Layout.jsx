import React from "react";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
