/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import { Button } from "./styled/button"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        width: 100%;
        padding: 40px 0 0 0;
        ${mq.xl(css`
          /* grid-template-columns: 1fr; */
        `)};
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: center;
        `)}
      `}
    >
      <div>
        <Link
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
          `}
          to="/"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
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
          `}
          to="/projects"
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
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
          `}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
