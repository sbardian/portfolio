import React from "react"
import Layout from "../components/layout"
import Oberyn from "../components/oberyn"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

const Animations = () => {
  const animations = [
    { to: "/oberyn", title: "Oberyn" },
    { to: "/", title: "Home" },
  ]

  return (
    <Layout>
      <Oberyn animations={animations} />
    </Layout>
  )
}

export default Animations
