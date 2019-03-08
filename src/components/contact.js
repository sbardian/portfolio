/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <section
      css={css`
        grid-template-columns: 1fr;
        width: 90%;
      `}
    >
      <h2>Contact</h2>
      <div
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-rows: auto 1fr;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
            ${mq.sm(css`
              grid-template-columns: 1fr;
            `)};
          `}
        >
          <input css={css``} type="text" name="email" placeholder="Email" />
          <input css={css``} type="text" name="name" placeholder="Name" />
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-row: minmax(200px, 400px);
            height: 250px;
          `}
        >
          <input css={css`height: 100%`} type="text" name="message" placeholder="Message" />
        </div>
      </div>
    </section>
  )
}
