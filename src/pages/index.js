// eslint-disable-next-line
import React from "react"
import Layout from "../components/layout"
import Home from "../components/home"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

/**
 * TODO: fade a color overlay over the top image. or make new images
 * with different colors and animate the change.
 *
 * TODO: find icons for bash, python,  and others. . .
 *
 */

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

export default IndexPage
