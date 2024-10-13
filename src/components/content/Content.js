import React from "react";
import "./Content.css";

export const Content = () => {
  return (
    <div id="content">
      <div id="left-side">
        <div>
          <h2>The Walk</h2>
        </div>
        <p>
          The walk from Monterosso to Riomaggiore will take you approximatly two
          hour, give or take an hour depending on the weather conditions and
          your physical shape.
        </p>
        <div>
          <img src="hj.jpeg"></img>
        </div>
      </div>
      ;
      <div id="right-side">
        <div>
          <h2>What?</h2>
        </div>
        <p>
          Cinque Terre comprises five villages: Monterosso, Vernaua, Corniglia,
          Manarola, and Riomaggiore.
        </p>
        <div>
          <h2>Where?</h2>
        </div>
        <p>
          On the northwest cost of the Italian Riviera, north of the city La
          Spezia.
        </p>
        <div>
          <h2>Price?</h2>
        </div>
        <p>The Walk is free!</p>
      </div>
    </div>
  );
};
