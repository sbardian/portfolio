// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import posed from "react-pose"
import PageLayout from "../components2/page-layout"
import Main from "../components2/main"
import "normalize.css"
import "../assets/main.css"

const AnimationDiv = posed.div({
  visible: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  hidden: {
    x: -500,
    opacity: 0,
    transition: { duration: 150 },
  },
})

const IndexPage = ({ transitionStatus }) => {
  // eslint-disable-next-line
  console.log("transitionStatus: ", transitionStatus)
  return (
    <PageLayout>
      <AnimationDiv
        pose={
          ["entering", "entered"].includes(transitionStatus)
            ? "visible"
            : "hidden"
        }
      >
        <Main />
      </AnimationDiv>
    </PageLayout>
  )
}
export default IndexPage

IndexPage.defaultProps = {
  transitionStatus: "",
}

IndexPage.propTypes = {
  transitionStatus: PropTypes.string,
}
