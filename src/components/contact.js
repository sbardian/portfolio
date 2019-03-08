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
          grid-template-rows: auto 1fr auto;
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
          <input
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div
          css={css`
            display: grid;
            grid-gap: 20px;
            grid-template-rows: minmax(200px, 400px);
            height: 250px;
          `}
        >
          <input
            css={css`
              height: 100%;
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
            type="text"
            name="message"
            placeholder="Message"
          />
        </div>
        <div>
          <button
            css={css`
              appearance: none;
              transition: all 0.2s ease-in-out;
              background-color: transparent;
              border-radius: 0.35em;
              border: 3px solid #e1e1e1;
              color: #e1e1e1;
              cursor: pointer;
              display: inline-block;
              font-weight: 400;
              height: 3.15em;
              height: calc(2.75em + 6px);
              line-height: 2.75em;
              min-width: 10em;
              padding: 0 1.5em;
              text-align: center;
              text-decoration: none;
              white-space: nowrap;
              margin-bottom: 3em;
              &:hover {
                background: #e1e1e1;
                color: #666;
                border-color: #92e5f3;
              }
            `}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  )
}
