import { DefaultTheme } from "styled-components"

const colors = {
  elements: {
    bg: "#fffffe",
    headline: "#00214d",
    paragraph: "#1b2d45",
    button: "#00ebc7",
    buttonText: "#00214d",
  },
  illustrations: {
    highlight: "#00ebc7",
    main: "#fffffe",
    stroke: "#00214d",
    secondary: "#ff5470",
    tertiary: "#fde24f",
  },
  shadow: {
    highlightShadow: "rgba(244,93,72,.8)",
    highlightShadowDark: "rgba(4,3,2,.6)",
  },
}
const size = {
  h1: "3.052em",
  h2: "2.441em",
  h3: "1.953em",
  h4: "1.563em",
  h5: "1.25em",
  p: "1.15em",
  a: "1em",
  maxWidth: "1070px",
  maxWidthPage: "970px",
}
const shadow = {
  elevations: [
    "0 0 0 1px rgba(0, 0, 0, 0.05)",
    "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    "0 0 0 3px rgba(66, 153, 225, 0.5)",
  ],
}

const transition = {
  mainTransition: "all .3s linear",
  secondaryTransition: "all 1s ease",
  quickTransition: "all 200ms ease-in-out",
}

const mainTheme: DefaultTheme = {
  appSize: "100%",
  borderRadius: "4px",
  colors,
  size,
  shadow,
  transition,
}

export { mainTheme }
