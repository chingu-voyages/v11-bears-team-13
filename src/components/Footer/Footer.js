import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram
} from "@fortawesome/fontawesome-free-brands";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h4>
            <span
              role="img"
              aria-label="palm tree"
              style={{ marginRight: "0.5rem" }}
            >
              &#x1F334;
            </span>
            Traverse Mauritius
          </h4>
          <p>Mauritius Travel Guide</p>
        </div>

        <div>
          <h4>Follow us</h4>
          <ul className="social-links">
            <li>
              <FontAwesomeIcon
                icon={faFacebookF}
                size="2x"
                style={{ color: "#E47600" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: "#E47600" }}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#E47600" }}
              />
            </li>
          </ul>
        </div>
        <div>
          <h4>Subscribe</h4>
          <form className="form-inline mx-2 subscribe-form">
            <label htmlFor="subscribe" style={{ margin: "0 auto" }}>
              <input
                className="form-control"
                style={{ maxWidth: "280px" }}
                type="email"
                placeholder="E-mail"
                aria-label="subscribe"
                id="subscribe"
              />
            </label>
          </form>
        </div>
      </div>
      <p className="text-center copy-right">
        <span>Copyright &copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
