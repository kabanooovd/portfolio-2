import { NavLink } from "react-router-dom"
import { BoldString, Flex, Icon, PageTitle } from "../../components"
import { ROUTES, technologiesList } from "../../config"
// import { theme } from "../../styles-config"
import { Container, InfoPage, TechWrapper } from "./Styles"

export const About = () => {
  
  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <PageTitle>Общая информация</PageTitle>
    </Flex>
    <Flex justify="center" padding="50px 0">
      <InfoPage>
        <h1>
          Дмитрий, Front-end developer
        </h1>
        <Flex padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Языки программирования:</BoldString> JavaScript, TypeScript
        </Flex>
        <Flex padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Инструменты:</BoldString> MS Visual Studio Code, WebStorm
        </Flex>
        <Flex padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Базы данных:</BoldString> MongoDB, Mongoose, PostgresQL
        </Flex>
        <Flex padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Технологии:</BoldString>
        </Flex>
        <Flex wrap="wrap" padding="0 10px">
          {technologiesList.map((tech, idx) => {
            return <TechWrapper key={idx}>
              <Flex margin="0 5px 0 3px"><Icon iconName="instrument" size="XS"/></Flex>
              <BoldString size={"10px"}>{tech}</BoldString>
            </TechWrapper>
          })}
        </Flex>
        <Flex  padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Мои работы:</BoldString>
          <span>Ознакомиться с моими проектами можно </span>
          <Flex margin="0 0 0 5px">
            <NavLink to={ROUTES.PROJECTS}>тут</NavLink>
          </Flex>
        </Flex>
        <Flex padding="10px 0" wrap="wrap">
          <BoldString margin="0 5px 0 0">Языки:</BoldString>
          &#127479;&#127482;<Flex margin="0 5px">Русский</Flex>
          &#127468;&#127463;<Flex margin="0 5px">English</Flex>
          &#127470;&#127473;<Flex margin="0 5px">עברית</Flex>
        </Flex>
      </InfoPage>
    </Flex>
  </Container>
}
