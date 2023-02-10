import styled, { keyframes } from "styled-components";

const optionsWindowAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Container = styled.div`
  height: calc(100vh - 70px - 30px);
  animation: ${optionsWindowAnimation} 3.5s;
`

export const InfoPage = styled.div`
  background: ${({theme}) => theme.colors.WHITE};
  padding: 20px;
  margin: 50px 10px 0 10px;
  max-width: 800px;
  border-radius: 8px;
  font-size: ${({theme}) => theme.fonts.S6};
`

export const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3px;
  padding: 5px;
  background: ${({theme}) => theme.colors.GREY_LIGHT};
  border-radius: 4px;
`