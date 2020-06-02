import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Contact from "./contact"

test("Displays the contact form", () => {
  const { queryByText, queryByTestId } = render(<Contact />)
  expect(queryByTestId("contact-form")).toBeTruthy()
  expect(queryByTestId("email")).toBeTruthy()
  expect(queryByTestId("name")).toBeTruthy()
  expect(queryByTestId("message")).toBeTruthy()
  expect(queryByTestId("submit-button")).toBeTruthy()
  expect(queryByText("Contact")).toBeTruthy()
})
