// eslint-disable-next-line
import React from "react"
import usePose from "../components/hooks/usePose"
import PageAnimation from "../components/page-animation"
import PageLayout from "../components/page-layout"
import Main from "../components/main"
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
