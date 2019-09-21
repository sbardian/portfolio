/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

const AnimationImageLink = ({ imageSrc, to, name }) => {
  return (
    <div
      css={css`
        display: flex;
        margin: 10px;
      `}
    >
      <Link
        css={css`
          font-size: 24pt;
          color: white;
        `}
        to={to}
      >
        <img
          css={css`
            margin: 0;
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 450px;
          `}
          src={imageSrc}
          alt={name}
        />
      </Link>
    </div>
  )
}

AnimationImageLink.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default AnimationImageLink
