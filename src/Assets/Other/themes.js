const dark = {
  cyan: "#12B0FF",
  bg: "#1C2239",
  bg2: "#293657",
  bgElements: "#212846",
  white: "#F8F8F8",
  black: "#1C2239",
  pink: "#D55B89",
  purple: "#9E6DD5",
  green: "#0DD2A3",
  text: "#F8F8F8",
  text2: "#12B0FF",
  text3: "#F8F8F8",
  buttonBg: "#12B0FF",
  buttonBgHover: "#008cd2",
  buttonText: "#F8F8F8",
  alwaysWhite: "#F8F8F8",
  transparent: "rgba(0, 0, 0, 0)",
};
const light = {
  cyan: "#212846",
  bg: "#F8F8F8",
  bg2: "#e84393",
  bgElements: "#212846",
  white: "#1C2239",
  black: "#F8F8F8",
  pink: "#D55B89",
  purple: "#9E6DD5",
  green: "#0DD2A3",
  text: "#1C2239",
  text2: "#e84393",
  text3: "#6c5ce7",
  buttonBg: "#6c5ce7",
  buttonBgHover: "#4d3cca",
  buttonText: "#F8F8F8",
  alwaysWhite: "#F8F8F8",
  transparent: "rgba(0, 0, 0, 0)",
};

export const Themes = {
  dark: dark,
  light: light,
};

export const colors = {
  bg: (props) => props.theme.bg,
  bg2: (props) => props.theme.bg2,
  bgElements: (props) => props.theme.bgElements,
  text: (props) => props.theme.text,
  text2: (props) => props.theme.text2,
  text3: (props) => props.theme.text3,
  white: (props) => props.theme.white,
  pink: (props) => props.theme.pink,
  purple: (props) => props.theme.purple,
  green: (props) => props.theme.green,
  cyan: (props) => props.theme.cyan,
  black: (props) => props.theme.black,
  buttonBg: (props) => props.theme.buttonBg,
  buttonBgHover: (props) => props.theme.buttonBgHover,
  buttonText: (props) => props.theme.buttonText,
  alwaysWhite: (props) => props.theme.alwaysWhite,
  transparent: (props) => props.theme.transparent,
};
