import React, { useEffect, useState } from "react";
// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from "react-google-maps";
import "./styles.css";
import gmaps from "./images/gmaps.png";

// function Map() {
//   return (
//     <div>
//       <GoogleMap
//         defaultZoom={10}
//         defaultCenter={{ lat: 47.2529, lng: -122.4443 }}
//       >
//         <Marker position={{ lat: 47.14777, lng: -122.37884 }} />
//       </GoogleMap>
//     </div>
//   );
// }
// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
  return (
    <div className="location-div">
      <div className="row">
        <div className="col s12">
          <img class="location" src={gmaps} />
        </div>
        {/* <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_G_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        /> */}
      </div>
      <div className="location-address-container">
        <div className="center-align">
          <i class="material-icons location-icon">location_on</i>
        </div>
        <p className=" center-align location-address">
          Watertown Hops Company 1224 American Way Watertown, WI 53094
        </p>
      </div>
    </div>
  );
}
