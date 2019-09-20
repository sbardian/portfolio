/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"
import Article from "./article"
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
          WARNING! These animations do not play well with mobile, they will load
          but view on a desktop for the best experience.
        </p>
      </Article>
      <div
        css={css`
          display: flex;
          margin: 10px;
          border: 1px solid white;
        `}
      >
        <Link
          css={css`
            font-size: 24pt;
            color: white;
            border: none;
          `}
          to="/oberynPage"
        >
          <img
            css={css`
              margin: 0;
              background-position: center;
              background-size: cover;
              width: 100%;
              height: 450px;
            `}
            src={oberynImage}
            alt="Oberyn"
          />
        </Link>
      </div>
      <div
        css={css`
          margin: 10px;
          border: 1px solid white;
        `}
      >
        <Link
          css={css`
            font-size: 24pt;
            color: white;
            border: none;
          `}
          to="/duckPage"
        >
          <img
            css={css`
              margin: 0;
              background-position: center;
              background-size: cover;
              width: 100%;
              height: 450px;
            `}
            src={duckImage}
            alt="Duck"
          />
        </Link>
      </div>
    </div>
  )
}

export default Animations
