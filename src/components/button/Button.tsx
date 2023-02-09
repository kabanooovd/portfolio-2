import styled from "styled-components";

export const Button = styled.button<{
  width?: string
}>`
  border: none;
  padding: 10px 20px;
  background: ${({theme}) => theme.colors.ORANGE};
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  width: ${({width}) => width || "auto"};
  cursor: pointer;
`