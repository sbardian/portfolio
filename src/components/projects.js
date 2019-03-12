/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Fade from "react-reveal/Fade"
import mq from "./mediaQueries"

export default ({ children, projects }) => {
  const { edges } = projects

  return (
    <section
      css={css`
        margin: 0 20px 20px 20px;
        ${mq.sm(css`
          grid-template-columns: 1fr;
        `)};
      `}
    >
      <h1>Recent Projects</h1>
      <p>
        This is a list of some of my recent side projects! I have not included
        any projects I have done for work here.
      </p>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {edges.map((proj, index) => {
          return (
            <div
              css={css`
                flex-basis: 350px;
                /* min-width: 200px; */
              `}
            >
              <Fade
                right={parseInt(index) % 2 === 0 ? false : true}
                left={parseInt(index) % 2 === 0 ? true : false}
              >
                <article>
                  <a href={proj.node.demoUrl} title="Demo" target="_blank">
                    <Img
                      fluid={proj.node.image.asset.fluid}
                      alt={proj.node.name}
                    />
                  </a>
                  <div
                    css={css`
                      margin-top: 10px;
                    `}
                  >
                    <h3
                      css={css`
                        display: inline;
                        padding-right: 10px;
                      `}
                    >
                      {proj.node.name}
                    </h3>
                    <p>{proj.node.description}</p>
                    <a
                      css={css`
                        color: #e1e1e1;
                      `}
                      href={proj.node.repoUrl}
                    >
                      <FontAwesomeIcon size="lg" icon={faGithub} />
                    </a>
                  </div>
                </article>
              </Fade>
            </div>
          )
        })}
      </div>
    </section>
  )
}
