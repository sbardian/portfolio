/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import * as THREE from "three"
import OrbitControls from "three-orbitcontrols"
// import { TweenMax, Back, Elastic, TweenLite, TimelineMax } from "gsap/TweenMax"
import { jsx, css } from "@emotion/core"
import AnimationNav from "../../animation-nav"
import init from "./init"

const DuckAnimation = ({ animations }) => {
  React.useEffect(() => {})

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e5ebf9;
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
