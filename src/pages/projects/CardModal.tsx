import styled from "styled-components";
import { Flex, Modal } from "../../components";
import { IProject } from "../../types";

const Title = styled.div`
  font-size: ${({theme}) => theme.fontsSizes.S8};
  margin-bottom: 20px;
`

export const CardModal: React.FC<{project: IProject, show: boolean, onClose: () => void}> = (props) => {
  const {project, show, onClose} = props
  const {title, content} = project
  return <Modal show={show} onClose={onClose}>
    <Flex justify="center">
      <Title>
        {title}
      </Title>
    </Flex>
    <div contentEditable={'true'} dangerouslySetInnerHTML={{ __html: content }} style={{maxHeight: "60vh", overflowY: "auto"}}/>    
  </Modal>
}