import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Animations from "./animations"

test("Displays the Animations title", () => {
  const { queryByText } = render(<Animations />)
  expect(queryByText("Animations")).toBeTruthy()
})
