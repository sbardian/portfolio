import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import PageLayout from "../components/page-layout"
import Projects from "../components/projects"
import "normalize.css"
import "../assets/main.css"

const ProjectsPage = ({ data: { allSanityProjects } }) => {
  return (
    <PageLayout>
      <Projects projects={allSanityProjects} />
    </PageLayout>
  )
}
ProjectsPage.propTypes = {
  data: PropTypes.shape({
    allSanityProjects: PropTypes.shape({
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
    }),
  }).isRequired,
}

export default ProjectsPage

export const projectImages = graphql`
  {
    allSanityProjects {
      edges {
        node {
          id
          name
          description
          demoUrl
          repoUrl
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`
