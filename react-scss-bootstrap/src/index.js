import React from "react";
import { render } from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

const App = () => (
  <div class="custom-class">
    <div class="header-text">Hello</div>
    <div className="col-6 bg-light mx-auto text-center">
      <div
        aria-hidden="false"
        aria-label="Logout"
        class="library-raiffeisen-pfp-iconset-01-15"
      >
        <i class="icon-logout" />
      </div>
      <button className="btn btn-dark">Click</button>
    </div>

    <button class="my">My</button>
  </div>
);

render(<App />, document.getElementById("app"));
