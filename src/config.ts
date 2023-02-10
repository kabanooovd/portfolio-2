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

export const ICON_DEFAULTS = {
  size: "S",
  color: "black",
}

export const technologiesList = [
  "React", 
  "Redux", 
  "Redux Toolkit", 
  "SPA", 
  "MobX", 
  "WebSocket", 
  "socket.io", 
  "Ant Design", 
  "Material UI", 
  "Bootstrap", 
  "Styled components", 
  "React-router-dom", 
  "Node.js", 
  "Express", 
  "ESLint", 
  "Jest", 
  "Postman", 
  "Axios", 
  "Figma", 
  "Photoshop", 
  "Swagger", 
  "HTML5", 
  "CSS3", 
  "Formik", 
  "JWT", 
  "custom-hooks", 
  "Google-map-react", 
  "File-saver", 
  "React-credit-cards", 
  "input masks", 
  "Git",
]

export const NO_IMAGE = "https://1000kvartyr-68.ru/local/templates/greentower_copy/images/float_sizes.png"