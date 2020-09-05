import React from "react";
import "./styles.css";
import logo from "./images/mollyshops.jpg";
import MainBodyText from "../MainBodyText";

function MainBodyContainer() {
  return (
    <div>
      <div className="row">
        <hr />
        <div className="row">
          <div className="col s12">
            <img className="materialboxed main-photo" src={logo} />
          </div>
          <hr />
        </div>
        <h2 className="center-align">Mollys Hops</h2>
        <div className="col s12">
          <MainBodyText />
        </div>
      </div>
    </div>
  );
}

export default MainBodyContainer;
