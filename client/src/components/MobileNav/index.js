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
        <a className="modal-trigger" href="#location-modal">
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
