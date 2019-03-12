import React from "react"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import Body from "../components/body"
import Nav from "../components/nav"

export default ({ children }) => (
  <div>
    <SEO title="Home" />
    <Sidebar />
    <Body>
      <Nav />
      {children}
    </Body>
  </div>
)
