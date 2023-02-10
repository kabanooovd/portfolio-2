import { Flex, Icon, PageTitle } from "../../components"
import { Container, InfoPage } from "./Styles"
import education from "../../wire-mock/education.json"
import { Utils } from "../../utils"

export const Education = () => {
  const _education = Utils.onAddIdentificator(education)
  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <PageTitle>Образование</PageTitle>
    </Flex>
    <Flex justify="center" padding="50px 0">
      <InfoPage>
        {_education.map(({id, content}) => {
          return <Flex key={id} align="center" margin="15px 0">
            <Flex margin="0 10px 0 0">
              <Icon iconName="project" size="S"/>
            </Flex>
            <p>{content}</p>
          </Flex>
        })}
      </InfoPage>
    </Flex>
  </Container>
}