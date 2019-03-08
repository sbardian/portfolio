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
        justify-items: center;
        height: 100%;
        width: 60%;
        position: fixed;
        top: 0;
        right: 0;
        overflow-y: auto;
        margin: 20px 0 20px 0;
        ${mq.xl(css`
          grid-template-columns: 1fr;
          padding: 20px;
          position: relative;
        `)};
      `}
    >
      {children}
    </div>
  )
}
