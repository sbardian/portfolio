/** @jsx jsx */
import * as React from "react"
import { jsx, Styled } from "theme-ui"
import Article from "./article"
import Social from "./social"

export default () => (
  <div>
    <Article>
      <Styled.h1>Contact</Styled.h1>
      <Social />
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
        grid: "20px",
        gridTemplateColumns: "1fr",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label htmlFor="bot-catcher">
          Do not fill this out if you are human
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
      <div
        sx={{
          display: "grid",
          grid: 3,
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
  </div>
)
