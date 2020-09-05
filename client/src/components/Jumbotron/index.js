import React from "react";
import "./styles.css";
import video from "../../assets/videos/video.mp4";
import video1 from "../../assets/videos/video1.mp4";
import video2 from "../../assets/videos/video2.mp4";

function Jumbotron() {
  return (
    <div class="slider carousel carousel-jumbotron">
      <div class="slide1">
        <video src={video} autoPlay={true} muted={true} loop={true} />
      </div>
      <div class="slide2">
        <video src={video1} autoPlay={true} muted={true} loop={true} />
      </div>
      <div class="slide3">
        <video src={video2} autoPlay={true} muted={true} loop={true} />
      </div>
    </div>
  );
}

export default Jumbotron;
