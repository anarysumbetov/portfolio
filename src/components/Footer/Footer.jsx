import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave-png" style={{ width: "100%" }} />
      <div className="f-content">
        <span>brodiaga_sirim@mail.ru</span>
        <div className="f-icons"> 
          <a href="https://github.com/anarysumbetov" rel="noopener noreferrer" target="_blank">
            <GitHub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/anarys-umbetov/" rel="noopener noreferrer" target="_blank">
            <LinkedIn color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;