/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <section
      css={css`
        width: 90%;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          width: 90%;
        `)};
      `}
    >
      <h2>Recent Work</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Debt Tracker</h3>
        </article>
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Lethe</h3>
        </article>
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Gatsby Breadcrumbs</h3>
        </article>
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Books</h3>
        </article>
      </div>
    </section>
  )
}
