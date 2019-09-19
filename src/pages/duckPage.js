import React from "react"
import Duck from "../components/duck"
import PageLayout from "../components/page-layout"
import "normalize.css"
import "../assets/main.css"

const DuckPage = () => {
  const animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
  ]
  return (
    <PageLayout showFooter={false}>
      <Duck animations={animations} />
    </PageLayout>
  )
}

export default DuckPage
