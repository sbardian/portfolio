import * as React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import Projects from "../components/projects"
import "normalize.css"
import "../assets/main.css"

const ProjectsPage: React.FunctionComponent<Portfolio.ProjectsData> = ({
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
