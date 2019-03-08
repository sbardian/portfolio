import React from "react"
import Layout from "../components/layout"
import RecentWork from "../components/recent-work"
import main from "../assets/main.css"
import "normalize.css"

const IndexPage = () => (
  <Layout>
    <section class="section-1">
      <h1>Welcome to this fine portfolio site!</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi,
        voluptatem fuga soluta necessitatibus rerum quibusdam? Nisi ducimus
        nostrum cupiditate autem ipsa facere ea asperiores et perspiciatis.
        Totam, at eius.
      </span>
    </section>
    <RecentWork />
    <section class="section-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi,
        voluptatem fuga soluta necessitatibus rerum quibusdam? Nisi ducimus
        nostrum cupiditate autem ipsa facere ea asperiores et perspiciatis.
        Totam, at eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi,
        voluptatem fuga soluta necessitatibus rerum quibusdam? Nisi ducimus
        nostrum cupiditate autem ipsa facere ea asperiores et perspiciatis.
        Totam, at eius.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi,
        voluptatem fuga soluta necessitatibus rerum quibusdam? Nisi ducimus
        nostrum cupiditate autem ipsa facere ea asperiores et perspiciatis.
        Totam, at eius.
      </p>
    </section>
  </Layout>
)

export default IndexPage
