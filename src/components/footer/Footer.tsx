import { Flex } from "../flex/Flex"
import { Container } from "./Styles"

export const Footer = () => {
  // const _ = U+24B8
  return <Container>
    <Flex align="center">
      <div>Все права защищены</div>
      <div style={{marginLeft: "8px"}}>&#9400;</div>
    </Flex>
  </Container>
}