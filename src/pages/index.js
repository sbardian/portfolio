// eslint-disable-next-line
import React from "react"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"
import PageLayout from "../components2/page-layout"
import { PageProvider } from "../components2/page-context"

/**
 * TODO: fade a color overlay over the top image. or make new images
 * with different colors and animate the change.
 *
 */

const IndexPage = () => (
  <PageProvider>
    <PageLayout />
  </PageProvider>
)

export default IndexPage
