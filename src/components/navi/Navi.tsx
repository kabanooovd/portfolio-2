import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SCREEN_WIDTH } from "../../styles-config";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
` 

const Navi = styled(NavLink)`
  color: ${({theme}) => theme.colors.GREY_LIGHT};
  font-size: ${({theme}) => theme.fontsSizes.S4};
  text-decoration: none;
  margin: 0 15px;
  position: relative;

  &.active {
    color: ${({theme}) => theme.colors.ORANGE};
    font-weight: bold;
    &::after {
      content: "";
      position: absolute;
      bottom: -26px;
      top: 41px;
      left: 0;
      right: 0;
      background: ${({theme}) => theme.colors.ORANGE};
    };
  }

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: ${SCREEN_WIDTH.XL}px) {
    font-size: ${({theme}) => theme.fontsSizes.S3};
  };

`

export const NavBar: React.FC<{
  navigations: Array<{
    id: string;
    route: string;
    title: string;
  }>;
}> = (props) => {
  const { navigations } = props;
  return <Container>
    {navigations.map(({id, route, title}) => {
      return <Navi key={id} to={route}>{title}</Navi>
    })}
  </Container>
}