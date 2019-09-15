import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

import { useDarkMode } from "../contexts/DarkModeContext";
import BackgroundDots from "../components/BackgroundDots";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700i&display=swap');
  body {
    background-color: ${props => props.bgColor};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
`;

const GlobalStyles = () => {
  const { theme } = useDarkMode()
  return (
    <>
      <Normalize />
      <Global bgColor={theme.BACKGROUND} />
      <BackgroundDots />
    </>
  );
}

export default GlobalStyles;
