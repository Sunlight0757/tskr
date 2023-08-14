import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout1 = ({ component }) => {
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  );
};

export default Layout1;
