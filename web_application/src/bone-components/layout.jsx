import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
const Layout = (props) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <Helmet>
        <title>toolsbox.io - your everyday tools</title>
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
