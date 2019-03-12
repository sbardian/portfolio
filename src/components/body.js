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
        grid-template-rows: auto 1fr;
        justify-items: center;
        min-height: 100%;
        position: absolute;
        right: 0;
        width: 65%;
        transition: all 0.3s linear;
        ${mq.xl(css`
          grid-template-rows: auto 1fr;
          position: absolute;
          width: 100%;
          height: auto;
          right: auto;
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
