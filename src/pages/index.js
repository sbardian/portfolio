// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import PageLayout from "../components2/page-layout"
import Main from "../components2/main"
import "normalize.css"
import "../assets/main.css"

const IndexPage = ({ transitionStatus }) => {
  // eslint-disable-next-line
  console.log("transitionStatus: ", transitionStatus)
  return (
    <PageLayout>
      <Main />
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
