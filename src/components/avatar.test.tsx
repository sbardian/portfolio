import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Avatar from "./avatar"

test("Displays the correct title", () => {
  const { findByText } = render(<Avatar />)
  expect(findByText("Brian Andrews")).toBeTruthy()
})
