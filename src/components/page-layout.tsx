/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  showFooter?: boolean
  useFullScreen?: boolean
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showFooter = true,
  useFullScreen = false,
}) => {
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
        gap: 3,
        gridTemplateRows: "auto 1fr auto",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        backgroundColor: "background",
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
        css={css`
          @media (min-width: 1035px) {
            width: ${useFullScreen ? null : "1000px"};
          }
          width: ${useFullScreen ? null : "95%"};
          justify-self: center;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 3;
        `}
      >
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export default PageLayout
