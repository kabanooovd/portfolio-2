import React from "react"
import styled from "styled-components"
import { Button, Flex, Icon, Modal } from "../../components"
import { NO_IMAGE } from "../../config"
import { SCREEN_WIDTH } from "../../styles-config"
import { IProject } from "../../types"
import { CardModal } from "./CardModal"
import { CardTitle, Description, TechnologiesWrapper } from "./Styles"

const Container = styled.div`
  background: #FFFFFF;
  margin: 30px 20px;
  border-radius: 4px;
  width: 320px;
  height: 400px;
  position: relative;
`

export const Image = styled.img<{src: string}>`
  width: 260px;
  background-image: url(${({src}) => src});
  
  @media (max-width: ${SCREEN_WIDTH.S}px) {
    width: 200px;
  };
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  text-align: center;
  /* bottom: 0; */
`

export const Card: React.FC<{project: IProject}> = (props) => {
  const {project} = props
  const [show, setShow] = React.useState(false)
  return <Container>
    <CardModal project={project} show={show} onClose={() => setShow(false)} />
    <Flex height="200px" justify="center" align="center">
      <Flex>
        <Image src={project.src || NO_IMAGE}/>
      </Flex>
    </Flex>
    <Flex padding="10px" direction="column">
      <TechnologiesWrapper>
        {project.technologies?.map((tech: any, idx: number) => {
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
        <Button width="50%" onClick={() => setShow(true)}>Подробнее</Button>
      </ButtonWrapper>
    </Flex>
  </Container>
}


