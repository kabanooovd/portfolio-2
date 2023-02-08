import { createGlobalStyle } from "styled-components"
import ethnocentric from "./fonts/ethnocentric.ttf"
import formular from "./fonts/Formular.woff2"
import montserrat from "./fonts/Montserrat.ttf"

export const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @font-face {
    font-family: "Ethnocentric";
    src: local("Ethnocentric"), url(${ethnocentric});
  }

  @font-face {
    font-family: "Formular";
    src: local("Formular"), url(${formular});
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"), url(${montserrat});
  }
`