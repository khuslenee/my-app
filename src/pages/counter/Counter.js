import React from "react";
import { Footer, Header } from "../../components";
import { Counter } from "../../components/counter/Counter";

export const CounterPage = () => {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
};
