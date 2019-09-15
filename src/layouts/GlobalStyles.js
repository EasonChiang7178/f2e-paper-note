import React from "react";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,600&display=swap');
  body {
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700i&display=swap');
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
`;

class GlobalStyles extends React.PureComponent {
  render = () => (
    <>
      <Normalize />
      <Global />
    </>
  );
}

export default GlobalStyles;
