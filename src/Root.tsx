import React from "react"
import styled from "styled-components"
import { Footer, Header } from "./components"
import { Routes } from "./Routes"

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({theme}) => theme.colors.GREY_LIGHT};
  font-family: 'Montserrat';
  font-size: ${({theme}) => theme.fontsSizes.DEFAULT};
  color: ${({theme}) => theme.colors.DEFAULT_TEX_COLOR};
  /* display: flex;
  flex-direction: column; */
`

export const Root: React.FC<{}> = () => {
  return <AppWrapper>
    <Header />
    <Routes />
    <Footer />
  </AppWrapper>
}