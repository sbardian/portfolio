/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

const Animations = () => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        marginLeft: 2,
        marginRight: 2,
      }}
    >
      <Article type="dark">
        <p>
          {`I have started playing with three.js.  Here are a couple of characters I have made so far.  These have been pretty fun to make, so probably some more to come here...`}
        </p>
      </Article>
      <Article type="light">
        <p>
          WARNING! These animations do not play well with mobile. They may or
          may not load on your mobile device. View them on a desktop for the
          best experience.
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
