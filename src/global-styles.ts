import { createGlobalStyle } from "styled-components"
import ethnocentric from "./fonts/ethnocentric.ttf"
import titles from "./fonts/titles.ttf"
import formular from "./fonts/Formular.woff2"
import montserrat from "./fonts/Montserrat.ttf"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
		width: 6px;
		height: 6px;
    background: #606061;
	  }
	  
	  ::-webkit-scrollbar-track {
		width: 6px;
	  }
	  
	  ::-webkit-scrollbar-thumb {
		width: 6px;
		background-color: #1c1c1c;
		border-radius: 6px;
	  }
	  
	  ::-webkit-scrollbar-thumb:hover {
    background-color: grey;
	  }
  }

  @font-face {
    font-family: "Titles";
    src: local("Titles"), url(${titles});
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