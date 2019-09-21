/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

const Animations = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
      `}
    >
      <Article type="dark">
        <p>
          {`I have started playing with three.js.  Here are a couple of characters I have made so far.  These have been pretty fun to make, so probably some more to come here...`}
        </p>
      </Article>
      <Article type="light">
        <p>
          WARNING! These animations do not play well with mobile. View them on a
          desktop for the best experience.
        </p>
      </Article>
      <AnimationImageLink
        imageSrc={oberynImage}
        to="/oberynPage"
        alt="Oberyn"
      />
      <AnimationImageLink imageSrc={duckImage} to="/duckPage" alt="Duck" />
    </div>
  )
}

export default Animations
