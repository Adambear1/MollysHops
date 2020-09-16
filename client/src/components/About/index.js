import React from "react";
import "./styles.css";
import AboutCard from "../AboutCard";
import hops from "./images/hops.jpg";

function About() {
  let info = [
    {
      image: hops,
      text:
        "At Mollys Hops, we strive to keep local pride through the distribution of our naturally grown hops to distributers and brewers alike at top quality. Owned and operated by a retired military veteran, the company strives for ultimate customer satisfaction, supreme services, quality of hops, and an overall excellent family experience.",
    },
    {
      image: hops,
      text:
        "The Molly's Hops was founded in 1987 to produce light-stable hop extracts for brewing using patented technologies. In succeeding years, Molly's Hops has expanded to supply hopping excellence throughout the world. Call it Hops 2.0: where sophisticated technologies combine with over a century and a half of brewing experience to create your favorite beers. Watertown’s products provide solutions to a spectrum of brewing challenges from product consistency and attribute enhancement to lower operating costs. We also offer the capabilities to design custom product requests for the Lab, Pilot or Commercial scale to meet current product or new product development requirements. Alternative packaging configurations are also available. Molly's Hops maintains both a food safety (FSSC 22000 v4.1) and a quality management (ISO 9001: 2015) certification, registered by EAGLE Food Registrations Inc. The FSSC 22000 scheme is specifically designed for food manufacturers and forms a basis for Watertown’s goal of continuous improvement for Quality and Food Safety. Molly's Hops is also Kosher Certified through OK Kosher",
    },
    {
      image: hops,
      text:
        "The Molly's Hops was founded in 1987 to produce light-stable hop extracts for brewing using patented technologies. In succeeding years, Molly's Hops has expanded to supply hopping excellence throughout the world. Call it Hops 2.0: where sophisticated technologies combine with over a century and a half of brewing experience to create your favorite beers. Watertown’s products provide solutions to a spectrum of brewing challenges from product consistency and attribute enhancement to lower operating costs. We also offer the capabilities to design custom product requests for the Lab, Pilot or Commercial scale to meet current product or new product development requirements. Alternative packaging configurations are also available. Molly's Hops maintains both a food safety (FSSC 22000 v4.1) and a quality management (ISO 9001: 2015) certification, registered by EAGLE Food Registrations Inc. The FSSC 22000 scheme is specifically designed for food manufacturers and forms a basis for Watertown’s goal of continuous improvement for Quality and Food Safety. Molly's Hops is also Kosher Certified through OK Kosher",
    },
    {
      image: hops,
      text:
        "Molly's hops is located at 11924 Vickery Ave E, Tacoma WA 98455. Hours of operations are Monday-Thursday: 7AM-3PM, Friday & Saturday: 11AM-9PM, and Sunday: 11AM-4PM. All hours are in PST. Able to place purchases after hours either through the website, direct message on social media, or direct phone call.",
    },
    {
      image: hops,
      text:
        "All orders can be made on site, while being assisted by staff members in selecting the hops that fits best for your needs. If you are a returning customer, or already know which hops you want to purchase, than direct contract through social media, email or phone can be done, or through the websites direct form. All methods reach the company directly to place the order and help prepare it in a timely manner. All orders can be fulfilled on site, placed in advanced, or contain special requirements as well.",
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
                <i className="material-icons">map</i>Location
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[3].image} text={info[3].text} />
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">assistant_photo</i>About
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[2].image} text={info[2].text} />
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">history</i>History
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[1].image} text={info[1].text} />
                </span>
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <i className="material-icons">hourglass_full</i>Orders
              </div>
              <div className="collapsible-body">
                <span>
                  <AboutCard image={info[4].image} text={info[4].text} />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
