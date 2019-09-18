import React from "react"
import PropTypes from "prop-types"
import posed from "react-pose"
import Contact from "../components2/contact"
import PageLayout from "../components2/page-layout"
import "normalize.css"
import "../assets/main.css"

const AnimationDiv = posed.div({
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 15 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 500,
    },
  },
})

const ContactPage = ({ transitionStatus }) => (
  <PageLayout>
    <AnimationDiv
      pose={
        ["entering", "entered"].includes(transitionStatus)
          ? "visible"
          : "hidden"
      }
    >
      <Contact />
    </AnimationDiv>
  </PageLayout>
)

export default ContactPage

ContactPage.defaultProps = {
  transitionStatus: "",
}

ContactPage.propTypes = {
  transitionStatus: PropTypes.string,
}
