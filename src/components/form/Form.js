import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Name: " + name + ", Email: " + email + ", Message: " + message
    );
  };
  return (
    <div id="form-container">
      <form id="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
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

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
