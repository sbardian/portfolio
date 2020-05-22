import * as React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import Projects from "../components/projects"
import "normalize.css"
import "../assets/main.css"

interface ProjectPageProps {
  data: {
    allSanityProjects: {
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
}

const ProjectsPage: React.FunctionComponent<ProjectPageProps> = ({
  data: { allSanityProjects },
}): React.ReactElement => {
  return (
    <PageLayout>
      <Projects projects={allSanityProjects} />
    </PageLayout>
  )
}

export default ProjectsPage

export const projectImages = graphql`
  {
    allSanityProjects(sort: { fields: rank }) {
      edges {
        node {
          id
          name
          description
          demoUrl
          repoUrl
          technologies
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          rank
        }
      }
    }
  }
`
