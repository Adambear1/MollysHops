import React from "react";
import MainBodyText from "../MainBodyText";
import MainBodyCarousel from "../MainBodyCarousel";

function MainBodyContainer() {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <MainBodyCarousel />
        </div>
      </div>
      <div className="row">
        <h2 className="center-align">Mollys Hops</h2>
        <div className="col s12">
          <MainBodyText />
        </div>
      </div>
    </div>
  );
}

export default MainBodyContainer;
