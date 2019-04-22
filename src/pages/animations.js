import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

const Animations = () => {
  return (
    <Layout>
      <div>
        {`I'm just starting on animations. . . something cool to intro them here.
        . .`}
        <Link to="/oberynPage">Oberyn</Link>
        <Link to="/duckPage">Duck</Link>
      </div>
    </Layout>
  )
}

export default Animations
