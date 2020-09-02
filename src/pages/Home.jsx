import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import R1T_BG from "../images/r1t_bg.jpg";
import R1S_BG from "../images/R1S_BG.jpg";

export default function Home() {
  return (
    <div id="Home">
      <Header />
      <div id="card-container" className="flex flex-col">
        <Card
          background_position_x="27%"
          background_position_y="0%"
          background={R1T_BG}
          car_name="R1T"
        />
        <Card
          background_position_x="60%"
          background_position_y="0%"
          background={R1S_BG}
          car_name="R1S"
        />
      </div>
    </div>
  );
}

