/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"

export default ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: 65%;
        position: fixed;
        top: 0;
        right: 0;
        overflow-y: auto;
      `}
    >
      {children}
    </div>
  )
}
