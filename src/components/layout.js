import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Body from "../components/body"

export default ({ children, siteTitle }) => (
  <div>
    <SEO title="Home" />
    <Sidebar />
    <Body>{children}</Body>
  </div>
)
