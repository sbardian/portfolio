/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import NavButton from "./nav-button"
import mq from "./media-queries"

export default () => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        margin: 0 20px 20px 20px;
        justify-items: center;
        padding: 40px 0 0 0;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: start;
        `)}
      `}
    >
      <NavButton title="Home" to="/" />
      <NavButton title="Projects" to="/projects" />
      <NavButton title="Animations" to="/animations" />
      <NavButton title="Contact" to="/contact" />
    </div>
  )
}
