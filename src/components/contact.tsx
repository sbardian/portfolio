/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-pascal-case */
import { jsx, Styled } from "theme-ui"
import Article from "./article"
import Social from "./social"

const Contact: React.FC = () => (
  <div>
    <Styled.h1>Contact</Styled.h1>
    <Social />
    <form
      data-testid="contact-form"
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="youSuckBot"
      action="/success"
      sx={{
        display: "grid",
        gap: "20px",
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
        data-testid="email"
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
        data-testid="name"
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
          gap: 3,
          height: "250px",
        }}
      >
        <textarea
          data-testid="message"
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
          data-testid="submit-button"
          type="submit"
          sx={{
            appearance: "none",
            transition: "all 0.2s ease-in-out",
            backgroundColor: "transparent",
            borderRadius: "0.35em",
            border: "3px solid",
            borderColor: "primary",
            color: "primary",
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

export default Contact
