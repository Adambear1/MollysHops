import React from "react";

import "./styles.css";
import gmaps from "./images/gmaps.png";

export default function Location() {
  return (
    <div
      id="location-modal"
      className="modal location-modal animate__animated  animate__fadeIn"
    >
      <div className="modal-content location-modal-content">
        <div className="location-div">
          <div className="row">
            <div className="col s12">
              <img className="location-image" src={gmaps} />
            </div>
          </div>
          <div className="location-address-container">
            <div className="center-align">
              <i className="material-icons location-icon">location_on</i>
            </div>
            <a
              href="https://www.google.com/maps/place/11924+Vickery+Ave+E,+Tacoma,+WA+98446/@47.1755804,-122.4263896,10.78z/data=!4m5!3m4!1s0x5490fdf615f52a5f:0x8bf9a4e304bd283d!8m2!3d47.1477642!4d-122.3788165"
              target="_blank"
            >
              <p className=" center-align location-address">
                Molly's Hops <br />
                11924 Vickery Avenue East, Tacoma WA 98405
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
