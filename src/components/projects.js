/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import mq from "./media-queries"

const ProjectsSection = styled.section`
  margin: 0 20px 20px 20px;
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const ProjectWrapper = styled.div`
  margin: 0 20px 20px 20px;
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const Article = styled.article`
  background-color: white;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-bottom: 40px;
  width: 620px;
  ${mq.sm(css`
    width: inherit;
  `)}
`

const ProjectTitle = styled.h1`
  display: inline;
  padding-right: 10px;
`

const ProjectImageWrapper = styled.div`
  width: 700px;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  height: 380px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
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

const ProjectInfo = styled.p`
  color: #666;
`

const Projects = ({ projects }) => (
  <ProjectsSection>
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
                  <ProjectTitle>{project.node.name}</ProjectTitle>
                  <ProjectInfo>{project.node.description}</ProjectInfo>
                  <a href={project.node.repoUrl}>
                    <FaGithub size="2.5em" />
                  </a>
                </ProjectInfoWrapper>
              </Article>
            </Fade>
          </div>
        )
      })}
    </ProjectWrapper>
  </ProjectsSection>
)

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
