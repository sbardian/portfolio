/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"
import { jsx, css } from "@emotion/core"
import PageLayout from "../components2/page-layout"
import PageAnimation from "../components2/page-animation"
import usePose from "../components2/hooks/usePose"
import Article from "../components2/article"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"
import "../assets/main.css"
import "normalize.css"

const Animations = () => {
  const visible = usePose()
  return (
    <PageLayout>
      <PageAnimation pose={visible ? "visible" : "hidden"}>
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
      </PageAnimation>
    </PageLayout>
  )
}
export default Animations
