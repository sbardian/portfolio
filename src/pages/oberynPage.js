import React from "react"
import Oberyn from "../components2/oberyn"
import PageLayout from "../components2/page-layout"
import "normalize.css"
import "../assets/main.css"

const OberynPage = () => {
  const animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
  ]
  return (
    <PageLayout showFooter={false}>
      <Oberyn animations={animations} />
    </PageLayout>
  )
}

export default OberynPage
