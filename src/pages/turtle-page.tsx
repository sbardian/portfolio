import * as React from "react"
import Turtle from "../components/turtle"
import PageLayout from "../components/page-layout"
import "normalize.css"
import "../assets/main.css"

const OberynPage: React.FC = () => {
  const animations: Animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
    { to: "/turtle-page", title: "Turtle" },
  ]
  return (
    <PageLayout showFooter={false} useFullScreen>
      <Turtle animations={animations} />
    </PageLayout>
  )
}

export default OberynPage
