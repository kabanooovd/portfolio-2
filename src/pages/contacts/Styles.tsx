import styled, { keyframes } from "styled-components";

const optionsWindowAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;

export const Container = styled.div`
  height: calc(100vh - 70px - 30px);
  animation: ${optionsWindowAnimation} 3.5s;
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center; */
`

export const InfoPage = styled.div`
  background: ${({theme}) => theme.colors.WHITE};
  padding: 20px;
  margin: 50px 0 0 0;
  max-width: 800px;
  border-radius: 8px;
  font-size: ${({theme}) => theme.fonts.S6};
`