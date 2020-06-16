import * as React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import Footer from "./footer"

describe("Footer", () => {
  it("Renders a footer successfully", () => {
    const { queryByTestId, queryByText } = render(<Footer />)
    expect(queryByTestId("footer-container")).toBeTruthy()
    expect(queryByText("built with")).toBeTruthy()
    expect(queryByTestId("footer-link")).toBeTruthy()
    expect(queryByTestId("footer-image")).toBeTruthy()
  })
})
