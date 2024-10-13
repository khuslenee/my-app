import React from "react";
import "./Greeting.css";

export const Greeting = (props) => {
  const { name, age, hobby } = props;

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        backgroundColor: hobby === "read book" ? "blue" : "pink",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 id="greeting-title">Greeting {name}!</h1>
      <p id="greeting-message">You look like {age}.</p>
    </div>
  );
};
