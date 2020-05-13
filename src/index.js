import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Main from "./components/main";
import PDF from "./components/pdf";
import OCR from "./components/ocr";

import * as serviceWorker from "./serviceWorker";
import JSON from "./components/json";
import GeoJSON from "./components/geojson";
import Images from "./components/images";
import ReportIssue from "./components/report-issue";
import Donate from "./components/donate";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/pdf" component={PDF} />
        <Route exact path="/ocr" component={OCR} />
        <Route exact path="/json" component={JSON} />
        <Route exact path="/geojson" component={GeoJSON} />
        <Route exact path="/images" component={Images} />
        <Route exact path="/report-issue" component={ReportIssue} />
        <Route exact path="/donate" component={Donate} />
        <Route
          path="/"
          render={(props) => {
            const [subdomain] = window.location.hostname.split(".");
            console.log(subdomain);
            if (subdomain === "pdf") return <PDF {...props} />;
            if (subdomain === "ocr") return <OCR {...props} />;
            if (subdomain === "json") return <JSON {...props} />;
            if (subdomain === "geojson") return <GeoJSON {...props} />;
            if (subdomain === "images") return <Images {...props} />;
            return <Main />;
          }}
        />
      </Switch>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
