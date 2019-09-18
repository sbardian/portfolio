import React from "react"
import Oberyn from "../components/oberyn"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"
import { PageProvider } from "../components2/page-context"

const OberynPage = () => {
  const animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
  ]
  return (
    <PageProvider>
      <Oberyn animations={animations} />
    </PageProvider>
  )
}

export default OberynPage
