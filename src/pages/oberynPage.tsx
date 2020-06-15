import * as React from "react"
import Oberyn from "../components/oberyn"
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
      <Oberyn animations={animations} />
    </PageLayout>
  )
}

export default OberynPage
