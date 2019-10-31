import React from "react";
import { render } from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles.scss";

const App = () => (
  <div class="custom-class">

<p>Click on the Menu Icon to transform it to "X":</p>
<div className="container" onClick="myFunction(this)">
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>

    <div className="header-text">Hello</div>



      <button className="my btn btn-dark">Click</button>

  </div>
);

render(<App />, document.getElementById("app"));

function myFunction(x) {
  console.log('works');
  x.classList.toggle("change");
}
