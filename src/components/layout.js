/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
// import PropTypes from "prop-types"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Body from "../components/body"
import Nav from "../components/nav"

export default ({ children, siteTitle }) => (
  <div>
    <SEO title="Home" />
    <Sidebar />
    <Body>
      <Nav />
      {children}
    </Body>
  </div>
)
