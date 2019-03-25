/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import mq from "./media-queries"

const NavButton = ({ title, to }) => {
  return (
    <div>
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
            min-width: 12em;
          `)}
        `}
      >
        {title}
      </Link>
    </div>
  )
}

NavButton.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavButton
