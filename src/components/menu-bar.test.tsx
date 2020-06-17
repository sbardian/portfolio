import * as React from "react"
// eslint-disable-next-line
import { render, fireEvent, wait } from "@testing-library/react"
import MenuBar from "./menu-bar"

const LIGHT = "light"
const DARK = "dark"
const setMenuStatus = jest.fn()
const setColorMode = jest.fn()
const menuStatus = true

describe("MenuBar", () => {
  it("Renders MenuBar and click each button successfully", async () => {
    const { debug, getByTestId } = render(
      <MenuBar
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        colorMode={LIGHT}
        setColorMode={setColorMode}
      />
    )
    const threeBarsButton = getByTestId("three-bars-button")
    const colorModeButton = getByTestId("color-mode-button")
    expect(getByTestId("three-bars-button")).toBeTruthy()
    expect(getByTestId("color-mode-button")).toBeTruthy()
    fireEvent.click(threeBarsButton)
    expect(setMenuStatus).toHaveBeenCalledTimes(1)
    expect(setMenuStatus).toHaveBeenCalledWith(!menuStatus)
    setColorMode.mockReset()
    fireEvent.click(colorModeButton)
    expect(setColorMode).toHaveBeenLastCalledWith(DARK)
    expect(setColorMode).toHaveBeenCalledTimes(1)
  })
})
