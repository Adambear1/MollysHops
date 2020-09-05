import React from "react";
import logo from "../../assets/images/logo_placeholder.png";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <div className=" brown darken-1 nav-wrapper">
        <a href="/" className="brand-logo center">
          <img src={logo} />
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a className="modal-trigger" href="#order-modal">
              <i className="material-icons" title="Order">
                add_shopping_cart
              </i>
            </a>
          </li>
          <li>
            <a className="modal-trigger" href="#location-modal">
              <i className="material-icons" title="Location">
                map
              </i>
            </a>
          </li>
          <li>
            <a className="modal-trigger" href="#faq-modal">
              <i className="material-icons" title="FAQ">
                question_answer
              </i>
            </a>
          </li>
          <li>
            <a className="modal-trigger" href="#about-modal">
              <i className="material-icons" title="About Us">
                person_pin
              </i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
