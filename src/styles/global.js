import { createGlobalStyle } from "styled-components";
import "react-circular-progressbar/dist/styles.css";

export default createGlobalStyle`
  @font-face {
  font-family: "RobotoMono";
  src: url("../fonts/RobotoMono-Thin.ttf") format("ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "RobotoMono";
}
  body {
    font-size: 14px;
    background: linear-gradient(to bottom, #162638, black);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }

  .content {
    flex-direction: column;
  }
`;
