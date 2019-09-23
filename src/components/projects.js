/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import HeaderArticle from "./article"
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

const Article = styled.div`
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-bottom: 40px;
  width: 620px;
  position: relative;
  ${mq.md(css`
    width: inherit;
  `)}
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
  position: absolute;
  left: -20px;
  top: 0;
  height: 380px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  ${mq.md(css`
    width: 100%;
    left: 0px;
    height: 220px;
    border-radius: 0px;
    box-shadow: none;
  `)}
  ${mq.sm(css`
    width: 100%;
    left: 0px;
    height: 220px;
    border-radius: 0px;
    box-shadow: none;
  `)}
`

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  margin-top: 370px;
  ${mq.md(css`
    margin-top: 200px;
  `)}
  ${mq.sm(css`
    margin-top: 220px;
  `)}
`

const ProjectInfo = styled.p`
  font-size: 1.5rem;
`

const Projects = ({ projects }) => (
  <ProjectsSection>
    <HeaderArticle>
      <h1>Projects</h1>
    </HeaderArticle>
    <ProjectWrapper>
      {projects.edges.map((project, index) => {
        return (
          <div key={project.node.id}>
            <Fade
              right={parseInt(index, 10) % 2 !== 0}
              left={parseInt(index, 10) % 2 === 0}
            >
              <Article
                sx={{
                  backgroundColor: "backgroundDark",
                }}
              >
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
                  <ProjectTitle sx={{ color: "primary" }}>
                    {project.node.name}
                  </ProjectTitle>
                  <ProjectInfo sx={{ color: "text" }}>
                    {project.node.description}
                  </ProjectInfo>
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
