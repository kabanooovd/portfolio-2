import styled from "styled-components";
import { SCREEN_WIDTH } from "../../styles-config";

export const Container = styled.div<any>`
  background: ${({theme}) => theme.colors.GREY_LIGHT};
  min-height: calc(100vh - 50px - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const MainTitle = styled.div<{
  fontFamily?: string;
}>`
  font-size: ${({theme}) => theme.fontsSizes.S9};
  font-family: ${({theme, fontFamily}) => fontFamily || theme.fonts.TITLES};

  @media (max-width: ${SCREEN_WIDTH.XL}px) {
    font-size: ${({theme}) => theme.fontsSizes.S8};
  }

  @media (max-width: ${SCREEN_WIDTH.M}px) {
    font-size: ${({theme}) => theme.fontsSizes.S6};
  }

  @media (max-width: ${SCREEN_WIDTH.XS}px) {
    font-size: ${({theme}) => theme.fontsSizes.S4};
  }
`

export const Technologies = styled.div`
  color: ${({theme}) => theme.colors.GREY_LIGHT2};
  font-size: ${({theme}) => theme.fontsSizes.S8};

`