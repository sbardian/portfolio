/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { findIndex } from "lodash"
import { GoChevronRight, GoChevronLeft } from "react-icons/go"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

const AnimationNav = ({ animations, current }) => {
  const currentIndex = findIndex(
    animations,
    animation => animation.title === current.title
  )

  let next = currentIndex + 1
  let previous = currentIndex - 1
  if (previous < 0) {
    previous = animations.length - 1
  }
  if (next > animations.length - 1) {
    next = 0
  }

  return (
    <div
      css={css`
        display: grid;
        grid-auto-rows: 50px 150px;
        justify-items: center;
        font-size: 28pt;
        width: 100%;
        top: 450px;
      `}
    >
      <Link to={`${current.to}`}>{current.title}</Link>
      <div
        css={css`
          display: grid;
          grid-template-columns: auto 800px auto;
          justify-content: space-between;
        `}
      >
        <Link
          css={css`
            color: white;
          `}
          to={animations[previous].to}
        >
          <GoChevronLeft size={100} />
        </Link>
        <div />
        <Link
          css={css`
            color: white;
          `}
          to={animations[next].to}
        >
          <GoChevronRight size={100} />
        </Link>
      </div>
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
