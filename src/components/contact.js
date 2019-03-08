/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <section
      css={css`
        width: 90%;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          width: 90%;
        `)};
      `}
    >
      <h1>Contact me</h1>
      <p>
        Feel free to contact me for job opertunities, or any old reason you
        want. If you would rather reach out via email, github or twitter see
        icons for each. I will get back with you as soon as possible.
      </p>
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
            /* grid-template-rows: minmax(200px, 400px); */
            height: 250px;
          `}
        >
          <textarea
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              padding: 1em;
              height: auto;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
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
              line-height: 2.75em;
              min-width: 10em;
              padding: 0 1.5em;
              margin-bottom: 3em;
              &:hover {
                background: #2f2d2d;
                color: #92e5f3;
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
