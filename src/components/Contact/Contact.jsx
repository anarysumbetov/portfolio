import React, { useContext } from "react";
import "./Contact.css";
import { themeContext } from "../../Context.js";

const Contact = () => {
    // context
    const theme = useContext(themeContext);

    const themeState = theme === null || theme === undefined ? undefined : theme.state;
    // it is the same like const themeState = theme?.state;
    const darkMode = themeState === null || themeState === undefined ? undefined : themeState.darkMode;
    // it is the same like const darkMode = theme?.state?.darkMode;

    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <div className="user">
                    E-mail: brodiaga_sirim@mail.ru
                </div>
            </div>
        </div>
    )
}

export default Contact;