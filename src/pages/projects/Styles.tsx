import styled, { keyframes } from "styled-components";
import { SCREEN_WIDTH } from "../../styles-config";

const optionsWindowAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Container = styled.div`
  height: calc(100vh - 70px - 30px);
  animation: ${optionsWindowAnimation} 3.5s;
`

export const Title = styled.div`
  font-size: ${({theme}) => theme.fontsSizes.S9};
  color: ${({theme}) => theme.colors.GREY_LIGHT2};

  @media (max-width: ${SCREEN_WIDTH.L}px) {
    font-size: ${({theme}) => theme.fontsSizes.S8};
  };
`

export const CardTitle = styled.span`
  font-size: ${({theme}) => theme.fontsSizes.S6};
  font-family: ${({theme}) => theme.fonts.FORMULAR};
  margin: 0 0 25px 0;
`
export const Description = styled.p`
  font-size: ${({theme}) => theme.fontsSizes.S3};
  color: ${({theme}) => theme.colors.GREY_LIGHT2};
`

export const TechnologiesWrapper = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
`
