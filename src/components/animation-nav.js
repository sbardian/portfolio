/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { findIndex } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

const AnimationNav = ({ animations, current }) => {
  const next = findIndex(
    animations,
    animation => animation.title === current.title
  )
  return (
    <div
      css={css`
        position: absolute;
        align-self: center;
        justify-content: start;
        height: 80%;
        font-size: 28pt;
        font-style: italic;
        margin-top: 40px;
      `}
    >
      <Link to={`${current.to}`}>{current.title}</Link>
      <Link to={animations[next + 1].to}>
        <FontAwesomeIcon
          css={css`
            padding-left: 10px;
          `}
          size="sm"
          icon={faArrowRight}
        />
      </Link>
    </div>
  )
}

AnimationNav.propTypes = {
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  current: PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default AnimationNav
