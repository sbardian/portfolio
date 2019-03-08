/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import sidebarBg from "../images/sidebar-bg.jpg"
import avatar from "../images/avatar.jpg"

export default () => {
  console.log("sidebarBg = ", sidebarBg)
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
          grid-template-rows: 60px 200px;
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
      </div>
    </div>
  )
}
