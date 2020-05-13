import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";
import MailIcon from "@material-ui/icons/Mail";
import Logo from "../assets/logo/toolsboxio-logo-only-white.png";

function UnderConstructionFull(props) {
  return (
    <UnderConstruction
      background={{
        color: "#000000",
        textColor: "#fff",
        overlay: {
          color: "#000",
          opacity: ".5",
        },
      }}
      logo={{
        src: Logo,
        alt: "alt text",
      }}
      title={{
        text: "Pardon",
      }}
      description={{
        text: (
          <p>
            This page is under construction, it will be available soon.{" "}
            <br></br>
            <br></br>
            <a style={{ color: "inherit" }} href="/">
              {" "}
              Go back to the main page{" "}
            </a>{" "}
          </p>
        ),
        style: {
          maxWidth: "440px",
        },
      }}
      links={[
        {
          url: "mailto:laith.alzyoud@icloud.com",
          text: <MailIcon fontSize="large" />,
        },
      ]}
    />
  );
}

export default UnderConstructionFull;
