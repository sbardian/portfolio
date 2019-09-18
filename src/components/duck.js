/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import AnimationNav from "./animation-nav"
import createAnimation from "./animations/duck/index"
// import Header from "../components2/header"

const DuckAnimation = ({ animations }) => {
  React.useEffect(() => {
    createAnimation()
  })

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <AnimationNav
        animations={animations}
        current={{ to: "/nikkoPage", title: "Duck" }}
      />
      <canvas
        css={css`
          background: transparent;
        `}
        id="ob-scene"
      />
    </div>
  )
}

DuckAnimation.propTypes = {
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default DuckAnimation
