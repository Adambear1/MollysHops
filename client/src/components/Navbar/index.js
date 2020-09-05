import React from "react";
// import logo from "../../assets/images/logo_placeholder.png";
import "./styles.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <div className=" brown darken-1 nav-wrapper">
        <a href="/" className="brand-logo center">
          {/* <img src={logo} /> */}
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="order" spy={true} smooth={true} duration={500}>
              <i className="material-icons" title="Order">
                add_shopping_cart
              </i>
            </Link>
          </li>
          <li>
            <Link to="location" spy={true} smooth={true} duration={500}>
              <i className="material-icons" title="Location">
                map
              </i>
            </Link>
          </li>
          <li>
            <Link to="FAQ" spy={true} smooth={true} duration={500}>
              <i className="material-icons" title="FAQ">
                question_answer
              </i>
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <i className="material-icons" title="About Us">
                person_pin
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
