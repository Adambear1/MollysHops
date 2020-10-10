import React from "react";
import "./styles.css";
function MobileNav() {
  return (
    <ul className="center mobile-nav  animate__animated  animate__fadeIn">
      <li className="mobile-nav-li animate__animated  animate__fadeInLeft">
        <a className="modal-trigger " href="#order-modal">
          <i className="material-icons" title="Order">
            add_shopping_cart
          </i>
        </a>
      </li>
      <li className="mobile-nav-li animate__animated  animate__fadeIn">
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
      <li className="mobile-nav-li animate__animated  animate__fadeIn">
        <a className="modal-trigger" href="#faq-modal">
          <i className="material-icons" title="FAQ">
            question_answer
          </i>
        </a>
      </li>
      <li className="mobile-nav-li animate__animated  animate__fadeInRight">
        <a className="modal-trigger" href="#about-modal">
          <i className="material-icons" title="About Us">
            person_pin
          </i>
        </a>
      </li>
    </ul>
  );
}

export default MobileNav;
