/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import { jsx } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

const PageLayout = ({ children, showFooter = true }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          description
          keywords
        }
      }
    }
  `)

  return (
    <div
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateRows: "auto 1fr auto",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Helmet
        title={siteMetadata.title}
        defer={false}
        meta={[
          { name: "description", content: siteMetadata.description },
          { name: "author", content: siteMetadata.author },
          { name: "keywords", content: siteMetadata.keywords },
          { property: "og:type", content: "website" },
          { property: "og:title", content: siteMetadata.title },
          { property: "og:description", content: siteMetadata.description },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <div
        sx={{
          maxWidth: "900px",
          "@media (min-width: 1000px)": {
            minWidth: "900px",
          },
        }}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export default PageLayout

PageLayout.defaultProps = {
  children: () => {},
  showFooter: true,
}

PageLayout.propTypes = {
  showFooter: PropTypes.bool,
  children: PropTypes.node,
}
