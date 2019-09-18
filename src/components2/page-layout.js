/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import posed, { PoseGroup } from "react-pose"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import { PageContext } from "./page-context"
import Projects from "./projects"
import Contact from "./contact"
import Animations from "./animations"

const PosedDiv = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
})

const PageLayout = ({ projects }) => {
  const { page } = React.useContext(PageContext)

  return (
    <div
      css={css`
        display: grid;
        grid-gap: 20px;
        grid-template-rows: auto 1fr auto;
        justify-content: center;
        height: 100%;
        width: 100%;
      `}
    >
      <Header />
      <div
        css={css`
          max-width: 900px;
        `}
      >
        <PoseGroup>
          {page === "home" && (
            <PosedDiv key={1}>
              <Main />
            </PosedDiv>
          )}
          {page === "projects" && (
            <PosedDiv key={2}>
              <Projects projects={projects} />
            </PosedDiv>
          )}
          {page === "animations" && (
            <PosedDiv key={3}>
              <Animations />
            </PosedDiv>
          )}
          {page === "contact" && (
            <PosedDiv key={4}>
              <Contact />
            </PosedDiv>
          )}
        </PoseGroup>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout

PageLayout.propTypes = {
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
