/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Themed } from "theme-ui"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaGithub, FaRegEye } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import Technologies from "./technologies"
import mq from "./media-queries"

const ProjectsSection = styled("section")``

const ProjectsWrapper = styled("div")``

const Project = styled("div")`
  margin: 1.34rem 0 1.34rem 0;
`

const Article = styled("div")`
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const ProjectTitle = styled("h1")`
  display: inline;
  padding-right: 10px;
  padding-top: 0.67rem;
`

const ProjectImageWrapper = styled("div")`
  overflow: hidden;
  height: 220px;
  ${mq.md} {
    height: 380px;
  }
`

const ProjectInfoWrapper = styled("div")`
  display: grid;
  gap: 0.67rem;
  grid-template-columns: 1fr;
  padding: 0.67rem;
`

const ProjectInfo = styled("p")`
  font-size: 1.5rem;
`

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <ProjectsSection>
    <Themed.h1>Projects</Themed.h1>
    <ProjectsWrapper>
      {projects.edges.map((project, index) => (
        <Project key={project.node.id}>
          <Fade right={index % 2 !== 0} left={index % 2 === 0}>
            <Article
              sx={{
                backgroundColor: "background",
              }}
            >
              <ProjectImageWrapper>
                <GatsbyImage
                  image={project.node.image.asset.gatsbyImageData}
                  alt={project.node.name}
                />
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
                  sx={{
                    display: "grid",
                    gap: "0.67rem",
                    gridTemplateColumns: "auto auto",
                    justifyContent: "end",
                  }}
                >
                  {project.node.demoUrl && (
                    <Themed.a
                      href={project.node.demoUrl}
                      title="Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaRegEye size="2.5em" />
                    </Themed.a>
                  )}
                  {project.node.repoUrl && (
                    <Themed.a
                      sx={{
                        justifySelf: "end",
                      }}
                      href={project.node.repoUrl}
                      target="_blank"
                      title="Repo"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size="2.5em" />
                    </Themed.a>
                  )}
                </div>
              </ProjectInfoWrapper>
            </Article>
          </Fade>
        </Project>
      ))}
    </ProjectsWrapper>
  </ProjectsSection>
)

export default Projects
