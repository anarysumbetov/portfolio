import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  {/* 
    const theme = useContext(themeContext);

    const themeState = theme === null || theme === undefined ? undefined : theme.state;
    // it is the same like const themeState = theme?.state;
    const darkMode = themeState === null || themeState === undefined ? undefined : themeState.darkMode;
    // it is the same like const darkMode = theme?.state?.darkMode;

    const handleClick = () => {
      // debugger
      theme.dispatch({ type: "toggle" });
    };
  */}

  return (
    <div>Toogle</div> 
  )
}

export default Toggle;