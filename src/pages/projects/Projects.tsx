import { Button, Flex, Icon, PageTitle } from "../../components"
import { Utils } from "../../utils"
import projects from "../../wire-mock/projects.json"
import { ButtonWrapper, Card, Image } from "./Card"
import { CardTitle, Container, Description, TechnologiesWrapper } from "./Styles"


export const Projects = () => {

  const _projects = Utils.onAddIdentificator(projects)
  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <PageTitle>Мои проекты</PageTitle>
    </Flex>
    <Flex justify="center" padding="50px 0" wrap="wrap">
      {_projects.map(project => {
        return (
          <Card key={project.id}>
            <Flex height="200px" justify="center" align="center">
              <Flex>
                <Image src={project.src}/>
              </Flex>
            </Flex>
            <Flex padding="10px" direction="column">
              <TechnologiesWrapper>
                {project.technologies?.map((tech, idx) => {
                  return <Flex margin="0 5px">
                    <Icon key={idx} iconName={tech} size="M" />
                  </Flex>
                })}
              </TechnologiesWrapper>
              <Flex justify="center">
                <CardTitle>
                  {project.title}
                </CardTitle>
              </Flex>
              <Description>{project.description}</Description>
              <ButtonWrapper>
                <Button width="50%">Подробнее</Button>
              </ButtonWrapper>
            </Flex>
          </Card>
        )
      })}
    </Flex>
  </Container>
}