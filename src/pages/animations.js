/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

const Animations = () => {
  return (
    <Layout>
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
        <div>
          {`I have started playing with three.js.  Here are a couple of characters I have made so far.  These have been pretty fun to make, so probably some more to come here...`}
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
            `}
            to="/oberynPage"
          >
            <img src={oberynImage} alt="Oberyn" />
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
            `}
            to="/duckPage"
          >
            <img src={duckImage} alt="Duck" />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Animations
