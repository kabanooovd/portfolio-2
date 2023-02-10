import { Button, Flex, Icon, PageTitle } from "../../components"
import { IProject } from "../../types"
import { Utils } from "../../utils"
import projects from "../../wire-mock/projects.json"
import { Card } from "./Card"
import { Container } from "./Styles"


export const Projects = () => {
  const _projects = Utils.onAddIdentificator(projects) as IProject[]
  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <PageTitle>Мои проекты</PageTitle>
    </Flex>
    <Flex justify="center" padding="50px 0" wrap="wrap">
      {_projects.map(project => {
        return (
          <Card key={project.id} project={project}/>
        )
      })}
    </Flex>
  </Container>
}