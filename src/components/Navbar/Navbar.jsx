import React from "react";
import Toggle from "../Toggle/Toggle.jsx";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
        {/* left */}
        <div className="n-left">
            <div className="n-name">Anarys</div>
            <Toggle />
        </div>
        {/* right */}
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="services" spy={true} smooth={true}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="works" spy={true} smooth={true}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" spy={true} smooth={true}>
                            Portfolio
                        </Link>
                    </li>
                    <li>Testimonial
                        <Link to="testimonial" spy={true} smooth={true}>
                            Testimonial
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;