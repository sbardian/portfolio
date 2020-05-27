/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

const PageLayout: React.FC<Portfolio.PageLayoutProps> = ({
  children,
  showFooter = true,
  useFullScreen = false,
}) => {
  const {
    site: { siteMetadata },
  }: Portfolio.SiteMetadata = useStaticQuery(graphql`
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
        sx={{
          width: `${useFullScreen ? null : "95%"}`,
          justifySelf: "center",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3",
          "@media (min-width: 1035px)": {
            width: `${useFullScreen ? null : "1000px"}`,
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
