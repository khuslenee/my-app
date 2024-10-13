import React from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#282c34",
        color: theme === "light" ? "#282c34" : "#f0f0f0",
      }}
      id="footer"
    ></div>
  );
};
