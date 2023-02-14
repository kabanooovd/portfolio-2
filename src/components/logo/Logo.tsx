import styled from "styled-components"
import { SCREEN_WIDTH } from "../../styles-config"

const LogoTitle = styled.div`
  font-family: 'Ethnocentric';
  font-size: ${({theme}) => theme.fontsSizes.S8};
  padding: 0;
  margin: 0;

  @media (max-width: ${SCREEN_WIDTH.L}px) {
    font-size: ${({theme}) => theme.fontsSizes.S7};
  };

  @media (max-width: ${SCREEN_WIDTH.M}px) {
    font-size: ${({theme}) => theme.fontsSizes.S6};
  };

`
export const Logo = () => {
  return <LogoTitle>DIMAS</LogoTitle>
}