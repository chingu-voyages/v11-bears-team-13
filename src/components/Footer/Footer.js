import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="text-center">Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
