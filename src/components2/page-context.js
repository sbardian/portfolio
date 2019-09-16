import React from "react"
import PropTypes from "prop-types"

export const PageContext = React.createContext()

export const PageProvider = ({ children }) => {
  const [page, setPage] = React.useState("home")

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  )
}

PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const PageConsumer = PageContext.Consumer
