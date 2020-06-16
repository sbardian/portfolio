import * as React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import MenuBar from "./menu-bar"

const setMenuStatus = jest.fn()
const setColorMode = jest.fn()

describe("MenuBar", () => {
  it("Renders MenuBar with  successfully", () => {
    const { debug } = render(
      <MenuBar
        menuStatus
        setMenuStatus={setMenuStatus}
        colorMode="dark"
        setColorMode={setColorMode}
      />
    )
    debug()
  })
})
