/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Fade from "react-reveal/Fade"
import mq from "./media-queries"

const Projects = ({ projects }) => {
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
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr;
          justify-content: center;
        `}
      >
        {projects.edges.map((project, index) => {
          return (
            <div key={project.node.id}>
              <Fade
                right={parseInt(index, 10) % 2 !== 0}
                left={parseInt(index, 10) % 2 === 0}
              >
                <article
                  css={css`
                    background-color: white;
                    border-radius: 3px;
                    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
                    padding: 20px;
                    width: 620px;
                    height: 670px;
                    ${mq.sm(css`
                      width: inherit;
                    `)}
                  `}
                >
                  <div
                    css={css`
                      width: 700px;
                      z-index: 2;
                      position: fixed;
                      left: 0;
                      top: 0;
                      height: 450px;
                      overflow: hidden;
                      border-radius: 5px;
                      ${mq.sm(css`
                        width: 100%;
                      `)}
                    `}
                  >
                    <a
                      href={project.node.demoUrl}
                      title="Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        fluid={project.node.image.asset.fluid}
                        alt={project.node.name}
                      />
                    </a>
                  </div>
                  <div
                    css={css`
                      display: grid;
                      grid-gap: 20px;
                      grid-template-columns: 1fr;
                      margin-top: 370px;
                    `}
                  >
                    <h1
                      css={css`
                        display: inline;
                        padding-right: 10px;
                        color: #666;
                      `}
                    >
                      {project.node.name}
                    </h1>
                    <p
                      css={css`
                        color: #666;
                      `}
                    >
                      {project.node.description}
                    </p>
                    <a
                      css={css`
                        color: #666;
                      `}
                      href={project.node.repoUrl}
                    >
                      <FontAwesomeIcon size="3x" icon={faGithub} />
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
