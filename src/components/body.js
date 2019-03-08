/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr;
        justify-items: start;
        height: 100%;
        position: absolute;
        top: 0;
        left: 640px;
        margin: 20px 20px 20px 20px;
        transition: all 0.3s linear;
        ${mq.xl(css`
          grid-template-columns: 1fr;
          position: absolute;
          left: 0;
          height: auto;
          top: 340px;
        `)};
        ${mq.sm(css`
          top: 520px;
        `)}
      `}
    >
      {children}
    </div>
  )
}
