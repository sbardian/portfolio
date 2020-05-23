// Adapted from https://emotion.sh/docs/media-queries
/** @jsx jsx */
import { css, SerializedStyles } from "@emotion/core"
import * as CSS from "csstype"

// const breakpoints = {
//   // mobile-first, so there is no 'xs' for portrait phones
//   sm: 576, // landscape phones
//   md: 768, // tablets
//   lg: 992, // landscape tablets and desktops
//   xl: 1200, // extra large desktops
// }

// const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
//   const prefix = typeof breakpoints[label] === "string" ? "" : "max-width:"
//   const suffix = typeof breakpoints[label] === "string" ? "" : "px"
//   accumulator[label] = (cls) =>
//     css`
//       @media (${prefix + breakpoints[label] + suffix}) {
//         ${cls};
//       }
//     `
//   return accumulator
// }, {})

// export default mq

interface BreackPoints {
  [k: string]: number
}

interface BreackPointsFn {
  (cls: any): SerializedStyles
}

interface MQ {
  [k: string]: any
}

// const breakpoints: BreackPoints = {
const breakpoints: BreackPoints = {
  // mobile-first, so there is no 'xs' for portrait phones
  sm: 576, // landscape phones
  md: 768, // tablets
  lg: 992, // landscape tablets and desktops
  xl: 1200, // extra large desktops
}

const mq: MQ = Object.keys(breakpoints).reduce(
  (accumulator: { [k: string]: BreackPointsFn }, label) => {
    const prefix = typeof breakpoints[label] === "string" ? "" : "max-width:"
    const suffix = typeof breakpoints[label] === "string" ? "" : "px"
    accumulator[label] = (cls: CSS.Properties) =>
      css`
        @media (${prefix + breakpoints[label] + suffix}) {
          ${cls};
        }
      `
    return accumulator
  },
  {}
)

export default mq
