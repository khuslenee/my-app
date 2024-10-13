import React, { useState } from "react";
import "./SignUp.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", cfpassword);

    // Reset fields
    setName("");
    setEmail("");
    setPassword("");
    setCfPassword("");
  };

  return (
    <div id="signup-container">
      <h2>Create Account</h2>

      <form id="signup" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="nameId"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="cfpassword">Confirm Password:</label>
        <input
          type="password"
          id="cfpasswordId"
          name="cfpassword"
          required
          value={cfpassword}
          onChange={(e) => setCfPassword(e.target.value)}
        />

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};
