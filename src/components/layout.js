import React from "react"
import PropTypes from "prop-types"
import Sidebar from "./sidebar"
import Body from "./body"
import Nav from "./nav"

const Layout = ({ children }) => (
  <div>
    <Sidebar />
    <Body>
      <Nav />
      {children}
    </Body>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
