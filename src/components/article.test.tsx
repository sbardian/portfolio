import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Article from "./article"

const ArticleData: React.FC = () => (
  <div>
    <h1>Mock Article</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
)

test("Displays an Article with its children", () => {
  const { findByText, queryByText, queryByTestId } = render(
    <Article name="test-article-id">
      <ArticleData />
    </Article>
  )
  const genericArticle = queryByTestId("generic-article")
  expect(genericArticle).toBeTruthy()
  expect(genericArticle).toHaveAttribute("id", "test-article-id")
  expect(queryByTestId("article-wrapper")).toBeTruthy()
  expect(queryByText("Mock Article")).toBeTruthy()
  expect(findByText("laborum")).toBeTruthy()
})
