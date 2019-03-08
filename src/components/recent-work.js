/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import Fade from 'react-reveal/Fade';
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
          justify-content: space-around;
        `}
      >
        <Fade left>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <h3>Debt Tracker</h3>
          </article>
        </Fade>
        <Fade right>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <h3>Lethe</h3>
          </article>
        </Fade>
        <Fade left>
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Gatsby Breadcrumbs</h3>
        </article>
        </Fade>
        <Fade right>
        <article>
          <img src="https://source.unsplash.com/random" alt="project1" />
          <h3>Books</h3>
        </article>
        </Fade>
      </div>
    </section>
  )
}
