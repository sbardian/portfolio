/** @jsx jsx */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, useColorMode } from "theme-ui"
import Header from "./header"
import Footer from "./footer"
import backgroundLight from "../images/bglight.jpg"
import backgroundDark from "../images/bgdark.jpg"

const loadSpeechCommands = async (
  setColorMode: (k: PortfolioColorMode) => void
) => {
  /* eslint-disable-next-line */
  const recognizer = speechCommands.create("BROWSER_FFT")
  await recognizer.ensureModelLoaded()
  const classLabels = recognizer.wordLabels()

  recognizer.listen(
    (result: any) => {
      const { scores } = result
      const max = Math.max(...scores)
      /* eslint-disable-next-line */
      for (let i = 0; i < classLabels.length; i++) {
        if (max.toFixed(2) === result.scores[i].toFixed(2)) {
          if (classLabels[i] === "up") {
            document.body.scrollBy(0, -800)
          }
          if (classLabels[i] === "down") {
            document.body.scrollBy(0, 800)
          }
          if (classLabels[i] === "one") {
            setColorMode("light")
          }
          if (classLabels[i] === "zero") {
            setColorMode("dark")
          }
        }
      }
    },
    {
      includeSpectrogram: true,
      probabilityThreshold: 0.75,
      invokeCallbackOnNoiseAndUnknown: true,
      overlapFactor: 0.5,
    }
  )
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showFooter = true,
}) => {
  const {
    site: { siteMetadata },
  }: SiteMetadata = useStaticQuery(graphql`
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

  const [colorMode, setColorMode] = useColorMode()

  React.useEffect(() => {
    loadSpeechCommands(setColorMode)
  }, [])

  return (
    <div
      sx={{
        height: "100vh",
      }}
    >
      <div
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateRows: "auto 1fr auto",
          gridTemplateColumns: "1fr",
          justifyContent: "center",
          backgroundColor: "background",
          backgroundImage: `url(${
            colorMode === "dark" ? backgroundDark : backgroundLight
          })`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: `cover`,
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
            justifySelf: "center",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3",
            margin: "0.67rem",
          }}
        >
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    </div>
  )
}

export default PageLayout
