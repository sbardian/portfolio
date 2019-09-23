/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
// import { css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

const PageLayout = ({ children, showFooter = true }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateRows: "auto 1fr auto",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <div
        sx={{
          maxWidth: "900px",
        }}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export default PageLayout

PageLayout.defaultProps = {
  children: () => {},
  showFooter: true,
}

PageLayout.propTypes = {
  showFooter: PropTypes.bool,
  children: PropTypes.node,
}
