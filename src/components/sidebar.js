/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import mq from "./mediaQueries"
import sidebarBg from "../images/sidebar-bg.jpg"
import overlay from "../images/overlay.png"
import avatar from "../images/avatar.jpg"
import gatsby from "../images/gatsby.png"

export default () => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 150px 250px;
        justify-content: center;
        align-content: center;
        height: 100%;
        width: 600px;
        position: fixed;
        top: 0;
        left: 0;
        background-image: url(${overlay}), url(${sidebarBg});
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 20;
        transition: all 0.3s linear;
        ${mq.xl(css`
          width: 100%;
          height: 300px;
          position: absolute;
          padding: 20px 0 20px 0px;
        `)};
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: center;
          height: 500px;
          padding: 20px 0 20px 0px;
        `)}
      `}
    >
      <div
        css={css`
          align-self: center;
        `}
      >
        <img
          css={css`
            height: 150px;
            width: 150px;
            padding-top: 20px;
          `}
          src={avatar}
          alt="Avatar"
        />
      </div>
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-rows: 60px 150px 50px;
          color: #474444;
          transition: all 8s;
          ${mq.sm(css`
            grid-template-rows: 80px auto 50px;
            justify-items: center;
          `)}
        `}
      >
        <div>
          <h1>Brian Andrews</h1>
        </div>
        <div
          css={css`
            padding: 0px 20px 0px 20px;
          `}
        >
          <span>
            Web developer and problem solver! I enjoy using code to solve
            complex problems so other people don't have to. Hopefully you will
            find something here to make your life easier.
          </span>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 35px 35px 35px;
            padding-bottom: 20px;
            align-items: center;
            justify-items: center;
          `}
        >
          <a
            css={css`
              color: #666;
            `}
            href="https://github.com/sbardian"
          >
            <FontAwesomeIcon size="2x" icon={faGithub} />
          </a>
          <a
            css={css`
              color: #666;
            `}
            href="https://twitter.com/xsbardianx"
          >
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </a>
          <a
            css={css`
              color: #666;
            `}
            href="mailto:sbardian@gmail.com?Subject=Dear Developer..."
          >
            <FontAwesomeIcon size="2x" icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div
        css={css`
          position: absolute;
          bottom: 0;
          right: 5px;
        `}
      >
        <a href="https://gatsby.com">
          <img
            css={css`
              height: 1em;
            `}
            src={gatsby}
            alt="Gatsby"
            title="Built with Gatsby"
          />
        </a>
      </div>
    </div>
  )
}
