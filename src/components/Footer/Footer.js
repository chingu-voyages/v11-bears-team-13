import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div>
          <h4>Mauritius</h4>
          <p>Mauritius Mauritius Mauritius Mauritius</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Contact Mauritius Mauritius</p>
        </div>
        <div>
          <h4>Social media</h4>
          <p>Mauritius Mauritius</p>
        </div>
        <div>
          <h4>Subscribe</h4>
          <p>Mauritius Mauritius</p>
        </div>
      </div>
      <p className="text-center">
        <span>Copyright &copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
