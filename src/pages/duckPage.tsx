import * as React from "react"
import Duck from "../components/duck"
import PageLayout from "../components/page-layout"
import "normalize.css"
import "../assets/main.css"

type Animations = Array<{ to: string; title: string }>

const DuckPage = () => {
  const animations: Animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
  ]
  return (
    <PageLayout showFooter={false} useFullScreen>
      <Duck animations={animations} />
    </PageLayout>
  )
}

export default DuckPage
