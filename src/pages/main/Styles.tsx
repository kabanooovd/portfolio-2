import styled from "styled-components";

export const Container = styled.div<any>`
  background: ${({theme}) => theme.colors.GREY_LIGHT};
  min-height: calc(100vh - 50px - 30px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainTitle = styled.div<{}>`
  font-size: ${({theme}) => theme.fontsSizes.S28};
  font-family: 'Titles';
`