/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Fade from "react-reveal/Fade"
import mq from "./mediaQueries"

const Projects = ({ projects }) => {
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
        This is a list of my recent side projects. I have not included any
        projects done for work.
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
              key={proj.node.id}
              css={css`
                flex-basis: 350px;
              `}
            >
              <Fade
                right={parseInt(index) % 2 === 0 ? false : true}
                left={parseInt(index) % 2 === 0 ? true : false}
              >
                <article>
                  <a
                    href={proj.node.demoUrl}
                    title="Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

Projects.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          description: PropTypes.string,
          demoUrl: PropTypes.string,
          repoUrl: PropTypes.string,
          image: PropTypes.shape({
            asset: PropTypes.shape({
              fluid: PropTypes.shape({
                base64: PropTypes.string,
                aspectRatio: PropTypes.number,
                src: PropTypes.string,
                srcSet: PropTypes.string,
                srcWebp: PropTypes.string,
                srcSetWebp: PropTypes.string,
                sizes: PropTypes.string,
              }),
            }),
          }),
        }),
      })
    ),
  }).isRequired,
}

export default Projects
