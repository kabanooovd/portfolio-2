import { Flex, Icon, Link, PageTitle } from "../../components"
import { Container, InfoPage } from "./Styles"

export const Contacts = () => {
  return <Container>
    <Flex justify="center" padding="50px 0 0 0">
      <PageTitle>Мои контакты</PageTitle>
    </Flex>
    <Flex justify="center" padding="50px 0">
      <InfoPage>
        <Flex align="center" margin="15px 0">
          <Flex margin="0 10px 0 0">
            <Icon iconName="phone" size="S"/>
          </Flex>
          <p>{"+7 (969) 640-08-56"}</p>
        </Flex>
        <Flex align="center" margin="15px 0">
          <Flex margin="0 10px 0 0">
            <Icon iconName="telegram" size="S"/>
          </Flex>
          <p>
            <Link href="https://t.me/DimaKabanov" title="DimaKabanov" />
          </p>
        </Flex>
        <Flex align="center" margin="15px 0">
          <Flex margin="0 10px 0 0">
            <Icon iconName="email" size="S"/>
          </Flex>
          <p>
            kabanooovd@yandex.ru
          </p>
        </Flex>
      </InfoPage>
    </Flex>
  </Container>
}