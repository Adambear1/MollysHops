import React, { useEffect } from "react";
import M from "materialize-css";
import "./styles.css";
import AboutCard from "../AboutCard";
import hops from "./images/hops.jpg";

function About() {
  let info = [
    {
      image: hops,
      text:
        "At Mollys Hops, we strive to keep local pride through the distribution of our naturally grown hops to distributers and brewers alike at top quality",
    },
    {
      image: hops,
      text:
        "The Molly's Hops was founded in 1987 to produce light-stable hop extracts for brewing using patented technologies. In succeeding years, Molly's Hops has expanded to supply hopping excellence throughout the world. Call it Hops 2.0: where sophisticated technologies combine with over a century and a half of brewing experience to create your favorite beers. Watertown’s products provide solutions to a spectrum of brewing challenges from product consistency and attribute enhancement to lower operating costs. We also offer the capabilities to design custom product requests for the Lab, Pilot or Commercial scale to meet current product or new product development requirements. Alternative packaging configurations are also available. Molly's Hops maintains both a food safety (FSSC 22000 v4.1) and a quality management (ISO 9001: 2015) certification, registered by EAGLE Food Registrations Inc. The FSSC 22000 scheme is specifically designed for food manufacturers and forms a basis for Watertown’s goal of continuous improvement for Quality and Food Safety. Molly's Hops is also Kosher Certified through OK Kosher",
    },
  ];

  return (
    <div id="about-modal" class="modal">
      <div class="modal-content">
        <div id="about" className="container">
          <h4 id="FAQ" className="FAQ-header card-content valign center">
            About
          </h4>
          <ul className="collapsible">
            <li className="active">
              <div className="collapsible-header">
                <i className="material-icons">filter_drama</i>Mission Statement
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[0].image} text={info[0].text} />
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">place</i>History
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[1].image} text={info[1].text} />
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">whatshot</i>About
              </div>
              <div className="collapsible-body">
                <span>Lorem ipsum dolor sit amet.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
