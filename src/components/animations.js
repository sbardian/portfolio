/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx, Styled } from "theme-ui"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

const Animations = () => {
  return (
    <div>
      <Article>
        <Styled.h1>Animations</Styled.h1>
      </Article>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Article type="dark">
          <p>
            Here are a couple of characters I have made using three.js. These
            have been pretty fun to make, I hope to do more soon.
          </p>
        </Article>
        <Article type="light">
          <p>
            WARNING! These animations do not play well with mobile!!! They may
            or may not load on your mobile device. View them on a desktop for
            the best experience.
          </p>
        </Article>
        <AnimationImageLink
          imageSrc={oberynImage}
          to="/oberynPage"
          name="Oberyn"
        />
        <AnimationImageLink imageSrc={duckImage} to="/duckPage" name="Duck" />
      </div>
    </div>
  )
}

export default Animations
