import React from "react";
import { Footer, Form, Greeting, Header } from "../../components";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Greeting name="Max" age="100" hobby="read book" />
      <Greeting name="Lily" age="17" hobby="shopping" />
      <Greeting name="Irmuun" age="52" hobby="read book" />
      <Footer />
    </div>
  );
};
