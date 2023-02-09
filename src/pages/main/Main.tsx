import { Flex } from "../../components"
import { theme } from "../../styles-config"
import { Container, Image, MainTitle, Technologies } from "./Styles"

export const Main = () => {
  return <Container>
    <Image />
    <Flex direction="column" align="center">
      <MainTitle>Кабанов Дмитрий</MainTitle>
      <MainTitle fontFamily={theme.fonts.ETHNOCENTRIC}>
        Frontend developer
      </MainTitle>
    </Flex>
    <Technologies>
      REACT · REDUX · TYPESCRIPT
    </Technologies>
  </Container>
}