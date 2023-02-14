import React from "react";
import ReactDOM from 'react-dom';
import { Root } from "./Root";
import { GlobalStyles } from "./global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles-config";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <Root />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)