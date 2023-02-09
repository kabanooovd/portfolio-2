import styled from "styled-components"
import { SCREEN_WIDTH } from "../../styles-config"

const Container = styled.div`
  background: #FFFFFF;
  margin: 30px 20px;
  border-radius: 4px;
  width: 320px;
  height: 400px;
  position: relative;
`

export const Card: React.FC<{}> = (props) => {
  return <Container>
    {props.children}
  </Container>
}

export const Image = styled.img<{src: string}>`
  width: 260px;
  background-image: url(${({src}) => src});
  
  /* @media (max-width: ${SCREEN_WIDTH.S}px) {
    width: 200px;
    height: 200px;
  }; */
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
  /* bottom: 0; */
`
