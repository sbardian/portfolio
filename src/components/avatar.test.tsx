import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Avatar from "./avatar"

test("Displays an title, subtitle, and avatar", () => {
  const { queryByText, queryByTestId } = render(<Avatar />)
  expect(queryByText("Brian Andrews")).toBeTruthy()
  expect(queryByText("portfolio")).toBeTruthy()
  expect(queryByTestId("gravatar-image")).toBeTruthy()
})
