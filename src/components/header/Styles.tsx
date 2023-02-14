import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SCREEN_WIDTH } from "../../styles-config";

export const Container = styled.div<{}>`
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  background: ${({theme}) => theme.colors.GREY_DARK};
  height: ${({theme}) => theme.HEADER_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  @media (max-width: ${SCREEN_WIDTH.M}px) {
    padding: 0 20px;
  };
`

export const BurgerContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

export const BurgerNavi = styled(NavLink)`
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  background: black;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0; 
  text-decoration: none;
  border: 3px solid transparent;
  border-radius: 4px;

  &.active {
    color: ${({theme}) => theme.colors.ORANGE};
    font-weight: bold;
    border: 3px solid ${({theme}) => theme.colors.ORANGE};
  }
`