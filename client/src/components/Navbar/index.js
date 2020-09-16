import React from "react";
import logo from "../../assets/images/logo_placeholder.png";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <div className="brown darken-1 nav-wrapper ">
        <a href="/" className="brand-logo center  ">
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
            <a
              className="modal-trigger"
              href="https://www.google.com/maps/place/11924+Vickery+Ave+E,+Tacoma,+WA+98446/@47.1477642,-122.3810052,17z/data=!3m1!4b1!4m5!3m4!1s0x5490fdf615f52a5f:0x8bf9a4e304bd283d!8m2!3d47.1477642!4d-122.3788165"
              target="_blank"
            >
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
