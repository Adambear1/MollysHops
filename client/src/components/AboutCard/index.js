import React from "react";
import "./styles.css";

function AboutCard(props) {
  return (
    <div className="container">
      <div className="row animate__animated  animate__fadeIn">
        <div className="col s12 about-photos" styles="overflow:hidden">
          <img src={props.image} />
        </div>
      </div>
      <div className="row">
        <div className="col s12 about-text">
          <p className="center-align ">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
