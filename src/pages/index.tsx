import * as React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import RestrictPageWidth from "../components/restrict-page-width"
import Projects from "../components/projects"
import "normalize.css"
import "../assets/main.css"

const ProjectsPage: React.FunctionComponent<ProjectsData> = ({
  data: { allSanityProjects },
}): React.ReactElement => {
  return (
    <PageLayout>
      <RestrictPageWidth>
        <Projects projects={allSanityProjects} />
      </RestrictPageWidth>
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
