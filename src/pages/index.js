import React from "react"
import Sidebar from "../components/sidebar"
import Body from "../components/body"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Sidebar />
    <Body />
  </div>
)

export default IndexPage
