// Adapted from https://emotion.sh/docs/media-queries
/** @jsx jsx */
import { css } from "@emotion/core"

interface BreackPoints {
  sm: number
  md: number
  lg: number
  xl: number
}

const breakpoints: BreackPoints = {
  // mobile-first, so there is no 'xs' for portrait phones
  sm: 576, // landscape phones
  md: 768, // tablets
  lg: 992, // landscape tablets and desktops
  xl: 1200, // extra large desktops
}

interface BreackPointsFn {
  (cls: any): string
}

interface MQ {
  [key: string]: BreackPointsFn
}

const mq: MQ = Object.keys(breakpoints).reduce((accumulator, label) => {
  const prefix = typeof breakpoints[label] === "string" ? "" : "max-width:"
  const suffix = typeof breakpoints[label] === "string" ? "" : "px"
  accumulator[label] = (cls) =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `
  return accumulator
}, {})

export default mq
