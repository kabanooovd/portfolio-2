import { Flex } from "../../components"
import { theme } from "../../styles-config"
import { Container, MainTitle, Technologies } from "./Styles"

export const Main = () => {
  return <Container>
    <div>IMAGE</div>
    <Flex direction="column" align="center">
      <MainTitle>Кабанов Дмитрий</MainTitle>
      <MainTitle fontFamily={theme.fonts.ETHNOCENTRIC}>
        Frontend developer
      </MainTitle>
    </Flex>
    <Technologies>
      REACT - REDUX - TYPESCRIPT
    </Technologies>
  </Container>
}