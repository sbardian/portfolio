/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const PageLayout = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-rows: auto 1fr auto;
        justify-content: center;
        height: 100%;
        width: 100%;
      `}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default PageLayout
