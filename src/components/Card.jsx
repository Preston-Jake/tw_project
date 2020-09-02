import React from "react";
import { StyledCard } from "../styles/StyledCard";

export default function Card(props) {
  return (
    <StyledCard
      background={props.background}
      background_position_x={props.background_position_x}
      background_position_y={props.background_position_y}
    >
      <div id="card-container">
  <h2>{props.car_name}</h2>
        <div id="link-container">
          <a>explore</a>
          <a>preorder</a>
        </div>
      </div>
    </StyledCard>
  );
}
