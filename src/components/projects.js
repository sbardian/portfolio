/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FaGithub } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import HeaderArticle from "./article"
import Technologies from "./technologies"
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
  margin-bottom: 40px;
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
  padding-top: 20px;
`

const ProjectImageWrapper = styled.div`
  height: 380px;
  overflow: hidden;
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
  padding: 20px;
`

const ProjectInfo = styled.p`
  font-size: 1.5rem;
`

const Projects = ({ projects }) => {
  return (
    <ProjectsSection>
      <div
        css={css`
          margin: 0 20px 0 20px;
        `}
      >
        <Styled.h1
          css={css`
            font-size: 3rem;
            margin-bottom: 0.04rem;
          `}
        >
          Brian Andrews
        </Styled.h1>
        <Styled.h5
          css={css`
            margin-top: 0.5rem;
            color: white;
          `}
        >
          portfolio
        </Styled.h5>
      </div>
      <HeaderArticle>
        <Styled.h1>Projects</Styled.h1>
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
                    {project.node.demoUrl && (
                      <Styled.a
                        href={project.node.demoUrl}
                        title="Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Img
                          fluid={project.node.image.asset.fluid}
                          alt={project.node.name}
                        />
                      </Styled.a>
                    )}
                    {!project.node.demoUrl && (
                      <Img
                        fluid={project.node.image.asset.fluid}
                        alt={project.node.name}
                      />
                    )}
                  </ProjectImageWrapper>
                  <ProjectInfoWrapper>
                    <ProjectTitle sx={{ color: "primary" }}>
                      {project.node.name}
                    </ProjectTitle>
                    <ProjectInfo sx={{ color: "text" }}>
                      {project.node.description}
                    </ProjectInfo>
                    <div>
                      <Technologies technologies={project.node.technologies} />
                    </div>
                    {project.node.repoUrl && (
                      <Styled.a href={project.node.repoUrl}>
                        <FaGithub size="2.5em" />
                      </Styled.a>
                    )}
                  </ProjectInfoWrapper>
                </Article>
              </Fade>
            </div>
          )
        })}
      </ProjectWrapper>
    </ProjectsSection>
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
          rank: PropTypes.number,
        }),
      })
    ),
  }).isRequired,
}

export default Projects
