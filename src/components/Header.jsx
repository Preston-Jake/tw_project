import React, { useLayoutEffect, useState } from "react";
import { StyledHeader } from "../styles/SytledHeader";
import rivian_bg from "../images/rivian_bg.jpg";
import { StyledButton } from "../styles/StyledButton";

export default function Header() {
  return (
    <StyledHeader headerImage={rivian_bg}>
      <div id="title-container">
        <h1>Electric</h1>
        <h1>Adventure</h1>
        <h1>Vehicles</h1>
      </div>
      <div id="button-container">
        <StyledButton>PREORDER NOW</StyledButton>
      </div>
    </StyledHeader>
  );
}
