import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import video from "./video.mp4";
import "pure-react-carousel/dist/react-carousel.es.css";

function Jumbotron() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     document
  //       .querySelector(".carousel__slider")
  //       .classList.toggle("animate-flicker");
  //   });
  // }, []);

  return (
    <div>
      <video
        className="video1 animate-flicker"
        width="100%"
        height="auto"
        autoPlay={true}
        muted={true}
        loop={true}
        preload={true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Jumbotron;
