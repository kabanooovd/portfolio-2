import styled from "styled-components";

export const Container = styled.div`
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  position: fixed;
  background: ${({theme}) => theme.colors.GREY_DARK};
  width: 100%;
  bottom: 0;
  height: ${({theme}) => theme.FOTTER_HEIGHT};
  height: 30px;
`