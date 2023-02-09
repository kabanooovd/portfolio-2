import { Button, Flex, Icon } from "../../components"
import projects from "../../wire-mock/projects.json"
import { ButtonWrapper, Card, Image } from "./Card"
import { CardTitle, Container, Description, TechnologiesWrapper, Title } from "./Styles"


export const Projects = () => {


  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <Title>Мои проекты</Title>
    </Flex>
    <Flex justify="center" padding="50px 0" wrap="wrap">
      {projects.map(project => {
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