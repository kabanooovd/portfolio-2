import React from "react";
import { navigations } from "../../config";
import useDimensions from "../../hooks/useDimensions";
import { isMobile, theme } from "../../styles-config";
import { Burger } from "../burger/Burger";
import { Flex } from "../flex/Flex"
import { Logo } from "../logo/Logo";
import { NavBar } from "../navi/Navi";
import { BurgerContainer, BurgerNavi, Container } from "./Styles"

export const Header = () => {
  const { screenWidth } = useDimensions();

  const _isMobile = isMobile(screenWidth)

  const [isOpen, setIsOpen] = React.useState(false)

  return <Container>
    <Flex>
      <Logo />
    </Flex>
    <Flex>
      {!_isMobile && <NavBar navigations={navigations} />}
    </Flex>
    <Flex>
      {_isMobile && <Burger 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        burgerColor={theme.colors.GREY_LIGHT} 
        burgerBackgound={theme.colors.GREY_DARK}
      >
        <BurgerContainer>
          {navigations.map(({id, route, title}) => {
            return <BurgerNavi key={id} to={route} onClick={() => setIsOpen(false)}>{title}</BurgerNavi>
          })}
        </BurgerContainer>
      </Burger>}
    </Flex>
  </Container>
}