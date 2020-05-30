import { Theme } from "theme-ui"

const theme: Theme = {
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Montserrat, sans-serif", // h1 and h2 only
  },
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    "1.4rem", // 0
    "1.6rem", // 1
    "1.8rem", // 2
    "2rem", // 3
    "2.2rem", // 4
    "2.4rem", // 5
    "2.8rem", // 6
    "3rem", // 7
    "4.4rem", // 8
    "0.8rem", // 9
  ],
  fontWeights: {
    body: 500,
    heading: 500,
    bold: 700,
  },
  lineHeights: [
    "20px", // 0
    "22px", // 1
    "30px", // 2
    "32px", // 3
    "36px", // 4
    "38px", // 5
    "52px", // 6
  ],
  space: [
    // Tachyons scale - could be any scale, though
    0, // 0
    "0.25rem", // 1
    "0.5rem", // 2
    "1rem", // 3
    "2rem", // 4
    "4rem", // 5
    "8rem", // 6
    "16rem", // 7
  ],
  styles: {
    a: {
      color: "link",
    },
    h1: {
      marginBottom: "0.5rem",
    },
    h2: {
      marginBottom: "0.5rem",
    },
    p: {
      marginTop: 0,
    },
  },
}

export default theme
