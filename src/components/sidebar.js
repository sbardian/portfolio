/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import sidebarBg from "../images/sidebar-bg.jpg"
import avatar from "../images/avatar.jpg"

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
        width: 35%;
        position: fixed;
        top: 0;
        left: 0;
        background-image: url(${sidebarBg});
        background-size: cover;
        background-repeat: no-repeat;
        padding: 20px 0 20px 0;
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
        `}
      >
        <div>
          <h1>Brian Andrews</h1>
        </div>
        <div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus rerum quas alias ad vero architecto odio ducimus!
            Nisi expedita amet in aspernatur qui veritatis doloremque non, ipsa
            iusto, nemo quia.
          </span>
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 20px 20px 20px 20px;
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
    </div>
  )
}
