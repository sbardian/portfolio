/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line
import * as React from "react"
import { jsx, Styled } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { FaGithub, FaRegEye } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import HeaderArticle from "./article"
import Technologies from "./technologies"
import mq from "./media-queries"

const ProjectsSection = styled("section")`
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const ProjectWrapper = styled("div")`
  margin: 0 20px 20px 20px;
  ${mq.sm(css`
    grid-template-columns: 1fr;
  `)};
`

const Article = styled("div")`
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;
  ${mq.md(css`
    width: inherit;
  `)}
  ${mq.sm(css`
    width: inherit;
  `)}
`

const ProjectTitle = styled("h1")`
  display: inline;
  padding-right: 10px;
  padding-top: 20px;
`

const ProjectImageWrapper = styled("div")`
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

const ProjectInfoWrapper = styled("div")`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  padding: 20px;
`

const ProjectInfo = styled("p")`
  font-size: 1.5rem;
`

interface ProjectsProps {
  projects: {
    edges: [
      {
        node: {
          id: string
          name: string
          description: string
          demoUrl: string
          repoUrl: string
          technologies: [string]
          image: {
            asset: {
              fluid: {
                base64: string
                aspectRatio: number
                src: string
                srcSet: string
                srcWebp: string
                srcSetWebp: string
                sizes: string
              }
            }
          }
          rank: number
        }
      }
    ]
  }
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <ProjectsSection>
      <HeaderArticle>
        <Styled.h1>Projects</Styled.h1>
      </HeaderArticle>
      <ProjectWrapper>
        {projects.edges.map((project, index) => {
          return (
            <div key={project.node.id}>
              <Fade right={index % 2 !== 0} left={index % 2 === 0}>
                <Article
                  sx={{
                    backgroundColor: "backgroundDark",
                  }}
                >
                  <ProjectImageWrapper>
                    <Img
                      fluid={project.node.image.asset.fluid}
                      alt={project.node.name}
                    />
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
                    <div
                      css={{
                        display: "grid",
                        grid: "20px",
                        gridTemplateColumns: "auto auto",
                        justifyContent: "end",
                      }}
                    >
                      {project.node.demoUrl && (
                        <Styled.a
                          href={project.node.demoUrl}
                          title="Demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaRegEye size="2.5em" />
                        </Styled.a>
                      )}
                      {project.node.repoUrl && (
                        <Styled.a
                          sx={{
                            justifySelf: "end",
                          }}
                          href={project.node.repoUrl}
                          target="_blank"
                          title="Repo"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size="2.5em" />
                        </Styled.a>
                      )}
                    </div>
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

export default Projects
