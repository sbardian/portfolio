/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <section
      css={css`
        width: 100%;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          width: 100%;
        `)};
      `}
    >
      <h1>Contact me</h1>
      <p>
        Feel free to contact me for job opportunities, or any old reason you
        want. If you would rather reach out via email, github or twitter see
        icons for each. I will get back with you as soon as possible.
      </p>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="youSuckBot"
        action="/success"
        css={css`
          display: grid;
          grid-gap: 20px;
          grid-template-rows: auto 1fr auto;
        `}
      >
        <input type="hidden" name="form-name" value="contact" />
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
          <div hidden>
            <label>
              Don’t fill this out if you're human:
              <input name="youSuckBot" type="text" aria-label="YouSuckBot" />
            </label>
          </div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
          />
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
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
            required
            name="message"
            placeholder="Message"
            aria-label="Message"
            css={css`
              border: 2px solid #e1e1e1;
              transition: all 0.2s ease-in-out;
              padding: 1em;
              height: auto;
              &:focus {
                border: 2px solid #92e5f3;
              }
            `}
          />
        </div>
        <div>
          <button
            type="submit"
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
      </form>
    </section>
  )
}
