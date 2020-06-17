/** @jsx jsx */
import * as React from "react"
import { jsx, useColorMode } from "theme-ui"
import { window } from "browser-monads"
import MenuBar from "./menu-bar"
import MenuButtons from "./menu-buttons"
import useShowMenu from "./hooks/useShowMenu"

const Menu: React.FC = () => {
  const { menuStatus, setMenuStatus } = useShowMenu(window.innerWidth)

  return (
    <React.Fragment>
      <MenuBar menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <MenuButtons menuStatus={menuStatus} />
    </React.Fragment>
  )
}

export default Menu
