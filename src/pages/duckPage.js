import React from "react"
import Duck from "../components/duck"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"
import { PageProvider } from "../components2/page-context"

const DuckPage = () => {
  const animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
  ]
  return (
    <PageProvider>
      <Duck animations={animations} />
    </PageProvider>
  )
}

export default DuckPage
