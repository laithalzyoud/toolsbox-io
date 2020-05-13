import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
