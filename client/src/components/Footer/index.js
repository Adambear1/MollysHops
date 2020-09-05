import React from "react";

function Footer() {
  return (
    <footer className="brown darken-1 page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Molly's Hops</h5>
            <p className="grey-text text-lighten-4">
              Fresh hops for local home brewers and micro-breweries. You pick or
              we pick. Eight varieties available.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Order
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Location
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Inquire
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2020 Quality-Creations</div>
      </div>
    </footer>
  );
}

export default Footer;
