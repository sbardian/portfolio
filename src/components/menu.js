/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, useColorMode } from "theme-ui"
import { window } from "browser-monads"
import MenuBar from "./menu-bar"
import MenuButtons from "./menu-buttons"
import useShowMenu from "./hooks/useShowMenu"

const Menu = () => {
  const { menuStatus, setMenuStatus } = useShowMenu(window.innerWidth)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <>
      <MenuBar
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        colorMode={colorMode}
        setColorMode={setColorMode}
      />
      <MenuButtons menuStatus={menuStatus} />
    </>
  )
}

export default Menu
