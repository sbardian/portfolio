/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import AnimationsNav from "./animations-nav"
import createAnimation from "./animations/duck/index"

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
      <AnimationsNav
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
