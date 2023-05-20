import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import GitHub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave-png" style={{ width: "100%" }} />
      <div className="f-content">
        <span>brodiaga_sirim@mail.ru</span>
        <div className="f-icons">
          <GitHub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;