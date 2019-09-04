import React from "react"
import { render } from "@testing-library/react"
import NavButton from "./nav-button"

test("nav-button success test", () => {
  const { getByTestId } = render(
    <NavButton to="https://gatsbyjs.org" title="Test" />
  )
  const link = getByTestId("test-Test-button")
  expect(link).toHaveAttribute("href", "https://gatsbyjs.org")
})
