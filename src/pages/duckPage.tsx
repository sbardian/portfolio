import * as React from "react"
import Duck from "../components/duck"
import PageLayout from "../components/page-layout"
import "normalize.css"
import "../assets/main.css"

const DuckPage: React.FC = () => {
  const animations: AnimationsObject[] = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
    { to: "/turtle-page", title: "Turtle" },
  ]
  return (
    <PageLayout showFooter={false}>
      <Duck animations={animations} />
    </PageLayout>
  )
}

export default DuckPage
