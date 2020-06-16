/** @jsx jsx */
import * as React from "react"
import { jsx, useColorMode } from "theme-ui"
import { window } from "browser-monads"
import MenuBar from "./menu-bar"
import MenuButtons from "./menu-buttons"
import useShowMenu from "./hooks/useShowMenu"

const Menu: React.FC = () => {
  const { menuStatus, setMenuStatus } = useShowMenu(window.innerWidth)
  const [colorMode, setColorMode]: [
    PortfolioColorMode,
    React.Dispatch<React.SetStateAction<PortfolioColorMode>>
  ] = useColorMode()

  return (
    <React.Fragment>
      <MenuBar
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        colorMode={colorMode}
        setColorMode={setColorMode}
      />
      <MenuButtons menuStatus={menuStatus} />
    </React.Fragment>
  )
}

export default Menu
