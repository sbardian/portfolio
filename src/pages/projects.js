import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import posed from "react-pose"
import PageLayout from "../components2/page-layout"
import Projects from "../components2/projects"
import "normalize.css"
import "../assets/main.css"

const AnimationDiv = posed.div({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
})

const ProjectsPage = ({ data: { allSanityProjects }, transitionStatus }) => (
  <PageLayout>
    <AnimationDiv
      pose={
        ["entering", "entered"].includes(transitionStatus)
          ? "visible"
          : "hidden"
      }
    >
      <Projects projects={allSanityProjects} />
    </AnimationDiv>
  </PageLayout>
)

ProjectsPage.defaultProps = {
  transitionStatus: "",
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
  transitionStatus: PropTypes.string,
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
