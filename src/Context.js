import { createContext, useReducer } from "react";
import { TOGGLE } from "./constants/actionTypes.js";

export const themeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE:
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>{props.children}</themeContext.Provider>
  );
};