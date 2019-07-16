/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Fade from "react-reveal/Fade"
import mq from "./media-queries"

const ProjectWrapper = styled.div`
  margin: 0 20px 20px 20px;
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const Article = styled.article`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  width: 620px;
  height: 670px;
  ${mq.sm(css`
    width: inherit;
  `)}
`

const ProjectImageWrapper = styled.div`
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
`

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  margin-top: 370px;
`

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
      <p>This is a list of my recent projects.</p>
      <ProjectWrapper>
        {projects.edges.map((project, index) => {
          return (
            <div key={project.node.id}>
              <Fade
                right={parseInt(index, 10) % 2 !== 0}
                left={parseInt(index, 10) % 2 === 0}
              >
                <Article>
                  <ProjectImageWrapper>
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
                  </ProjectImageWrapper>
                  <ProjectInfoWrapper>
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
                  </ProjectInfoWrapper>
                </Article>
              </Fade>
            </div>
          )
        })}
      </ProjectWrapper>
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
