// eslint-disable-next-line
import React from "react"
import usePose from "../components2/hooks/usePose"
import PageAnimation from "../components2/page-animation"
import PageLayout from "../components2/page-layout"
import Main from "../components2/main"
import "normalize.css"
import "../assets/main.css"

const IndexPage = () => {
  const visible = usePose()
  return (
    <PageLayout>
      <PageAnimation pose={visible ? "visible" : "hidden"}>
        <Main />
      </PageAnimation>
    </PageLayout>
  )
}
export default IndexPage
