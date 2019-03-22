/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default () => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr;
        justify-items: center;
        width: 100%;
        padding: 40px 0 0 0;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: start;
        `)}
      `}
    >
      <div>
        Thanks, your message has been sent successfully! I will get back to you
        as soon as possible.
      </div>
    </div>
  )
}
