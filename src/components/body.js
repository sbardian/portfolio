/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import mq from "./media-queries"

const Body = ({ children }) => {
  return (
    <div
      id="main-body"
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

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Body
