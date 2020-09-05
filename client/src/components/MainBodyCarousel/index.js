import React, { useEffect } from "react";
import M from "materialize-css";
import "./styles.css";
import logo from "./images/mollyshops.jpg";
import image from "./images/hops.jpg";
import image1 from "./images/hops1.jpg";
import image2 from "./images/hops2.jpg";
import image3 from "./images/hops3.jpg";
import image4 from "./images/hops4.jpg";
import image5 from "./images/hops5.jpg";
import image6 from "./images/hops6.jpg";

function MainBodyCarousel() {
  return (
    <>
      <div
        class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div class="gallery-cell animate__animated  animate__fadeInUp">
          <img class="main-photo" src={logo} />
        </div>
        <div class="gallery-cell animate__animated  animate__fadeInRight">
          <img class="main-photo" src={image} />
        </div>
        <div class="gallery-cell">
          <img class="main-photo" src={image1} />
        </div>
        <div class="gallery-cell">
          <img class="main-photo" src={image2} />
        </div>
        <div class="gallery-cell">
          <img class="main-photo" src={image3} />
        </div>
        <div class="gallery-cell">
          <img class="main-photo" src={image4} />
        </div>
        <div class="gallery-cell">
          <img class="main-photo" src={image5} />
        </div>
        <div class="gallery-cell animate__animated  animate__fadeInLeft">
          <img class="main-photo" src={image6} />
        </div>
      </div>
    </>
  );
}

export default MainBodyCarousel;
