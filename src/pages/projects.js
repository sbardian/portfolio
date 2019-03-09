import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import { graphql } from "gatsby"
import "normalize.css"
import main from "../assets/main.css"

const ProjectsPage = ({ data: { allSanityProjects } }) => {
  return (
    <Layout>
      <Projects projects={allSanityProjects} />
    </Layout>
  )
}

export default ProjectsPage

export const projectImages = graphql`
  {
    allSanityProjects {
      edges {
        node {
          name
          description
          demoUrl
          repoUrl
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
