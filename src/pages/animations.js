/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import PageLayout from "../components/page-layout"
import Animations from "../components/animations"
import "../assets/main.css"
import "normalize.css"

const AnimationsPage = () => {
  return (
    <PageLayout>
      <Animations />
    </PageLayout>
  )
}
export default AnimationsPage
