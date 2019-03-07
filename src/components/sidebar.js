/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"

export default () => {
  return (
    <div
      css={css`
        height: 100%;
        width: 35%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: cornflowerblue;
      `}
    >
      Sidebar
    </div>
  )
}
