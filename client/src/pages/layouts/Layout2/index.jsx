import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout2 = ({ component }) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-col flex-1">
          {component}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout2;
