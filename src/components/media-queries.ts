// Source: https://github.com/wKovacs64/pwl/blob/bd79791b2fa54c14de186b64203f9350a9bea986/src/utils/mq.ts

const breakpointMap = {
  // mobile-first, so there is no 'xs' for portrait phones
  sm: 576, // landscape phones
  md: 768, // tablets
  lg: 992, // landscape tablets and desktops
  xl: 1200, // extra large desktops
}

type Breakpoints = typeof breakpointMap
type BreakpointLabel = keyof Breakpoints
type MediaQueries = { [BL in BreakpointLabel]: string }

const mq: MediaQueries = (Object.entries(breakpointMap) as Array<
  [BreakpointLabel, Breakpoints[BreakpointLabel]]
>).reduce<Partial<MediaQueries>>((accumulator, [label, bp]) => {
  accumulator[label] = `@media (min-width: ${bp}px)`
  return accumulator
}, {}) as MediaQueries

export default mq
