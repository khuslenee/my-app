import React, { useState } from "react";
import "./SignIn.css"; // Importing the CSS for styles

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div id="signin-container">
      <h2>Welcome Back</h2>
      <div>
        <h3>Please enter your details</h3>
      </div>

      <form id="signIn" onSubmit={handleSubmit}>
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

        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
};
