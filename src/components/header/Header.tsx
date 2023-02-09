import { navigations } from "../../config";
import useDimensions from "../../hooks/useDimensions";
import { isMobile } from "../../styles-config";
import { Flex } from "../flex/Flex"
import { NavBar } from "../navi/Navi";
import { Container } from "./Styles"

export const Header = () => {
  const { screenWidth } = useDimensions();

  const _isMobile = isMobile(screenWidth)

  return <Container>
    <Flex>
      <h1>LOGO</h1>
    </Flex>
    <Flex>
      {/* {true && "Navi"} */}
      {!_isMobile && <NavBar navigations={navigations} />}
    </Flex>
    <Flex>
      {_isMobile && "burger"}
    </Flex>
  </Container>
}