/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css, Styled } from "theme-ui"
import Gravatar from "react-gravatar"

const Avatar = () => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        alignItems: "center ",
      }}
    >
      <Styled.h1
        css={css`
          font-size: 3rem;
          margin-bottom: 0.04rem;
        `}
      >
        Brian Andrews
      </Styled.h1>
      <a
        href="https://github.com/sbardian"
        alt="Github"
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gravatar
          email="sbardian@gmail.com"
          size={150}
          sx={{
            height: "150px",
            width: "150px",
            borderRadius: "90px",
            perspective: "100px",
            marginTop: "0.67em",
          }}
        />
      </a>
      <Styled.h5
        css={css`
          margin-top: 0.5rem;
          color: white;
        `}
      >
        portfolio
      </Styled.h5>
    </div>
  )
}

export default Avatar
