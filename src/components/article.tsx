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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
`

const Light = styled("div")`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const Dark = styled("div")`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const Article: React.FC<Portfolio.ArticleProps> = ({ children, name }) => {
  return (
    <ArticleWrapper
      sx={{
        color: "text",
        backgroundColor: "background",
        fontSize: 1,
      }}
    >
      <Generic id={name}>{children}</Generic>
    </ArticleWrapper>
  )
}

export default Article
