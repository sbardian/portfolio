/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css } from "@emotion/core"
import Article from "./article"
import mq from "./media-queries"

export default () => (
  <section
    sx={{
      margin: 2,
      marginTop: 0,
    }}
    css={css`
      ${mq.sm(css`
        grid-template-columns: 1fr;
      `)};
    `}
  >
    <Article>
      <Styled.h1>Contact</Styled.h1>
      <p>
        Feel free to contact me for job opportunities, or any reason you want.
        If you would rather reach out via email, github or twitter see icons for
        each. I will get back with you as soon as possible.
      </p>
    </Article>
    <form
      data-testid="test-contact-form"
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="youSuckBot"
      action="/success"
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateRows: "auto 1fr auto",
        margin: 3,
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: "1fr 1fr",
        }}
        css={css`
          ${mq.sm(css`
            grid-template-columns: 1fr;
          `)};
        `}
      >
        <div hidden>
          <label htmlFor="bot-catcher">
            {`Don’t fill this out if you're human`}
            <input
              id="bot-catcher"
              name="youSuckBot"
              type="text"
              aria-label="YouSuckBot"
            />
          </label>
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          sx={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "background",
            transition: "border-color 0.2s ease-in-out",
            "&:focus": {
              borderColor: "primary",
            },
          }}
        />
        <input
          required
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Name"
          sx={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "background",
            transition: "border-color 0.2s ease-in-out",
            "&:focus": {
              borderColor: "primary",
            },
          }}
        />
      </div>
      <div
        sx={{
          display: "grid",
          gridGap: 3,
          height: "250px",
        }}
      >
        <textarea
          required
          name="message"
          placeholder="Message"
          aria-label="Message"
          sx={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "background",
            padding: "1em",
            height: "auto",
            transition: "border-color 0.2s ease-in-out",
            "&:focus": {
              borderColor: "primary",
            },
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          sx={{
            appearance: "none",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "transparent",
            borderRadius: "0.35em",
            border: "3px solid #e1e1e1",
            color: "#e1e1e1",
            cursor: "pointer",
            display: "inline-block",
            fontWeight: "400",
            lineHeight: "2.75em",
            minWidth: "10em",
            padding: "0 1.5em",
            marginBottom: "3em",
            "&:hover": {
              backgroundColor: "primary",
              color: "text",
              borderColor: "primary",
            },
          }}
        >
          Submit
        </button>
      </div>
    </form>
  </section>
)
