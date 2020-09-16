import React from "react";
import "./styles.css";
function Footer() {
  return (
    <footer className="brown darken-1 page-footer center">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Molly's Hops</h5>
            <p className="grey-text text-lighten-4">
              Molly's Hops is a locally owned hops business that strives to
              produce top of the line hops for local brewers and families a
              like. Owned and operated by a retired military veteran, the
              company holds values of customer satisfaction, exceptional
              services, and an overall positive family experience. The company
              is always looking to expand and capitalize on all opportunities.
              With that said, we are recycle and sale all vines, make
              connections, and sell an overall excellent family experience for
              all to endure.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li className="footer-links">
                <a
                  className="grey-text text-lighten-3 modal-trigger"
                  href="#order-modal"
                >
                  Order
                </a>
              </li>
              <li className="footer-links">
                <a
                  className="grey-text text-lighten-3 modal-trigger"
                  href="https://www.google.com/maps/place/11924+Vickery+Ave+E,+Tacoma,+WA+98446/@47.1477642,-122.3810052,17z/data=!3m1!4b1!4m5!3m4!1s0x5490fdf615f52a5f:0x8bf9a4e304bd283d!8m2!3d47.1477642!4d-122.3788165"
                  target="_blank"
                >
                  Location
                </a>
              </li>
              <li className="footer-links">
                <a
                  className="grey-text text-lighten-3 modal-trigger"
                  href="#faq-modal"
                >
                  Inquire
                </a>
              </li>
              <li className="footer-links">
                <a
                  className="grey-text text-lighten-3 modal-trigger"
                  href="#about-modal"
                >
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
