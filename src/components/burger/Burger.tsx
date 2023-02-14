import React from "react";
import styled from "styled-components"
import { Icon } from "../icon/Icon";



const StyledWrapper = styled.div`
  z-index: 1002;
  position: absolute;
`;


const StyledBurger = styled.div<{burgerBackgound: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({burgerBackgound}) => burgerBackgound};
  position: fixed;
  top: 20px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  cursor: pointer;
  z-index: 1001;
`;

const StyledMenu = styled.div<{right: string}>`
  background: #FFFFFF;
  box-shadow: -5px -22px 45px -28px rgb(34 60 80 / 60%);
  position: fixed;
  top: 0px;
  right: ${({right}) => right};
  height: 100%;
  width: 345px;
  transition-duration: 500ms;
  transform: translate(-345px);
  padding: 0 0 160px 0;
`; 

export const Burger: React.FC<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  burgerColor?: string;
  burgerBackgound?: string;
}> = (props) => {
  const {isOpen, setIsOpen, burgerColor, burgerBackgound} = props

  const onBurger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledWrapper>
      <StyledBurger onClick={onBurger} burgerBackgound={burgerBackgound || "black"}>
        {!isOpen && <Icon iconName="burger" color={burgerColor} />}
        {isOpen && <Icon iconName="close"  color={burgerColor} />}
      </StyledBurger>
      <StyledMenu right={isOpen ? "-345px" : "-951px"}> 
        {props.children}
      </StyledMenu>
    </StyledWrapper>
  )
}