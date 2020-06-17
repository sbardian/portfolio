import * as React from "react"
// eslint-disable-next-line
import { render, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/theme"
import MenuBar from "./menu-bar"

const setMenuStatus = jest.fn()
const menuStatus = true

describe("MenuBar", () => {
  it("Renders MenuBar and click each button successfully", async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <MenuBar menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      </ThemeProvider>
    )
    const threeBarsButton = getByTestId("three-bars-button")
    const colorModeButton = getByTestId("color-mode-button")
    expect(getByTestId("three-bars-button")).toBeTruthy()
    expect(getByTestId("color-mode-button")).toBeTruthy()
    fireEvent.click(threeBarsButton)
    expect(setMenuStatus).toHaveBeenCalledTimes(1)
    expect(setMenuStatus).toHaveBeenCalledWith(!menuStatus)
  })
})
