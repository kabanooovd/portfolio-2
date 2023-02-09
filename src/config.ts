import * as uuid from "uuid"

export const ROUTES = {
  BLANK: '*',
  MENU: '/home',
  PROJECTS: '/projects',
  ABOUT: '/about',
  EDUCATION: '/education',
  CONTACTS: '/contacts',
}

interface INavigations {
  id: string;
  route: string;
  title: string;
}
export const navigations: INavigations[] = [
  {
    id: uuid.v4(),
    route: ROUTES.MENU,
    title: "Гравная",
  },
  {
    id: uuid.v4(),
    route: ROUTES.PROJECTS,
    title: "Проекты",
  },
  {
    id: uuid.v4(),
    route: ROUTES.EDUCATION,
    title: "Образование",
  },
  {
    id: uuid.v4(),
    route: ROUTES.CONTACTS,
    title: "Контакты",
  },
  {
    id: uuid.v4(),
    route: ROUTES.ABOUT,
    title: "О себе",
  },
]