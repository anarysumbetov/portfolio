import React, { useContext } from "react";
import { themeContext } from "../../Context.js";
import "./Experience.css";

const Experience = () => {
    // context
  
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;

    return (
        <div className="experience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>2+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>years </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>9+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>1+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>companies </span>
                <span>Work</span>
            </div>
        </div>
    )
}

export default Experience;