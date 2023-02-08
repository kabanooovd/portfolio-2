import React from "react";
import ReactDOM from 'react-dom';
import { Root } from "./Root";
import { GlobalStyles } from "./global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-config";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)