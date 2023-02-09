export const theme = {
  colors: {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    RED: "#fc3a3a",
    ORANGE: "#ff6a00cc",
    GREY_LIGHT: "#ebe8e8",
    GREY_LIGHT2: "#b0aeb0cc",
    GREY_DARK: "#1b1b1c",
    DEFAULT_TEX_COLOR: '#130224',
  },
  fonts: {
    ETHNOCENTRIC: 'Ethnocentric',
    FORMULAR: 'Formular',
    TITLES: 'Titles',
  },
  fontsSizes: {
    DEFAULT: '14px',
    S1: '8px',
    S2: '10px',
    S3: '14px',
    S4: '16px',
    S5: '18px',
    S6: '22px',
    S7: '28px',
    S8: '34px',
    S9: '50px',
  },
  HEADER_HEIGHT: '70px',
  FOTTER_HEIGHT: '30px',
}

export const SCREEN_WIDTH = {
  XXL: 1200,
  XL: 1010,
  L: 800,
  M: 600,
  S: 500,
  XS: 400,
}

export const isMobile = (currentScreenWidth: number) => {
  return currentScreenWidth < SCREEN_WIDTH.L
}