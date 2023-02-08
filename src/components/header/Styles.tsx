import styled from "styled-components";

export const Container = styled.div<{}>`
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  background: ${({theme}) => theme.colors.GREY_DARK};
  height: ${({theme}) => theme.HEADER_HEIGHT};
`