const dark = {
  cyan: "#12B0FF",
  bg: "#1C2239",
  bgElements: "#212846",
  white: "#F8F8F8",
  black: "#1C2239",
  pink: "#D55B89",
  purple: "#9E6DD5",
  green: "#0DD2A3",
  text: "#F8F8F8",
};
const light = {
  cyan: "#212846",
  bg: "#F8F8F8",
  bgElements: "#212846",
  white: "#1C2239",
  black: "#F8F8F8",
  pink: "#D55B89",
  purple: "#9E6DD5",
  green: "#0DD2A3",
  text: "#1C2239",
};

export const Themes = {
  dark: dark,
  light: light,
};

export const colors = {
  bg: (props) => props.theme.bg,
  bgElements: (props) => props.theme.bgElements,
  text: (props) => props.theme.text,
  white: (props) => props.theme.white,
  pink: (props) => props.theme.pink,
  purple: (props) => props.theme.purple,
  green: (props) => props.theme.green,
  cyan: (props) => props.theme.cyan,
  black: (props) => props.theme.black,
};
