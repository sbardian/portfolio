/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ title, to }) => {
  return (
    <div
      css={css`
        ${mq.sm(css`
          width: 100%;
          margin: 0 20px 0 20px;
          max-width: -moz-available;
        `)}
      `}
    >
      <Link
        to={to}
        activeClassName="active-nav"
        css={css`
          appearance: none;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          background-color: transparent;
          border-radius: 0.35em;
          border: 3px solid #e1e1e1;
          color: #e1e1e1;
          cursor: pointer;
          display: inline-block;
          font-weight: 400;
          line-height: 2.75em;
          min-width: 7em;
          max-width: 10em;
          padding: 0 1.5em;
          &:hover {
            background: #2f2d2d;
            color: #92e5f3;
            border-color: #92e5f3;
          }
          ${mq.sm(css`
            width: 100%;
            max-width: -moz-available;
            max-width: -webkit-fill-available;
          `)}
        `}
      >
        {title}
      </Link>
    </div>
  )
}
