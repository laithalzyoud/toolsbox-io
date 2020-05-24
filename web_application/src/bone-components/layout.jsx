import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <Helmet>
        <title>toolsbox.io - your everyday tools</title>
      </Helmet>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
