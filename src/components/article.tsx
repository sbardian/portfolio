/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

const ArticleWrapper = styled("article")`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Generic = styled("div")`
  padding: 0.67rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.67rem 0.67rem;
`

const Article: React.FC<ArticleProps> = ({ children, name }) => {
  return (
    <ArticleWrapper
      data-testid="article-wrapper"
      sx={{
        color: "text",
        backgroundColor: "background",
        fontSize: 1,
      }}
    >
      <Generic data-testid="generic-article" id={name}>
        {children}
      </Generic>
    </ArticleWrapper>
  )
}

export default Article
