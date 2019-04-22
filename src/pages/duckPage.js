import React from "react"
import Layout from "../components/layout"
import Duck from "../components/duck"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

const DuckPage = () => {
  const animations = [
    { to: "/oberynPage", title: "Oberyn" },
    { to: "/duckPage", title: "Duck" },
    { to: "/", title: "Home" },
  ]
  return (
    <Layout>
      <Duck animations={animations} />
    </Layout>
  )
}

export default DuckPage
