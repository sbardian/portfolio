/** @jsx jsx */
// eslint-disable-next-line
import styled from "@emotion/styled"
import { jsx, useColorMode } from "theme-ui"
import posed from "react-pose"
import { GoThreeBars } from "react-icons/go"
import { FaLightbulb } from "react-icons/fa"

const ButtonBar = styled("div")`
  display: grid;
  grid-gap: 0.67rem;
  grid-template-columns: auto 1fr auto;
  align-content: center;
  margin: 0.67rem auto;
  max-width: 1000px;
`

const PosedMenuButton = posed.button({
  open: {
    rotate: "90deg",
    duration: 200,
  },
  closed: {
    rotate: "0deg",
    duration: 200,
  },
})

const PosedColorModeButton = posed.button({
  dark: {
    color: "#e1e1e1",
    duration: 200,
  },
  light: {
    color: "#d1cb5e",
    duration: 200,
  },
})

const MenuBar: React.FC<MenuBarProps> = ({ menuStatus, setMenuStatus }) => {
  const [colorMode, setColorMode] = useColorMode<PortfolioColorMode>()

  return (
    <ButtonBar>
      <div
        sx={{
          display: "none",
          "@media (min-width: 576px)": {
            display: "block",
          },
        }}
      />
      <PosedMenuButton
        data-testid="three-bars-button"
        pose={menuStatus ? "open" : "closed"}
        type="button"
        aria-label="Menu"
        onClick={() => {
          setMenuStatus(!menuStatus)
        }}
        sx={{
          display: "block",
          color: "#a1a1a1",
          outline: 0,
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          transition: "color ease 2ms",
          "&:focus": {
            outline: "thin dotted",
            outlineColor: "#e8175d",
          },
          "&:hover": {
            color: "primary",
          },
          "@media (min-width: 576px)": {
            display: "none",
          },
        }}
      >
        <GoThreeBars size={30} sx={{ marginLeft: "10px" }} />
      </PosedMenuButton>
      <PosedColorModeButton
        data-testid="color-mode-button"
        pose={colorMode}
        sx={{
          display: "flex",
          justifySelf: "end",
          border: "none",
          backgroundColor: "transparent",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        type="button"
        aria-label="Color Mode"
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light")
        }}
      >
        <FaLightbulb size={30} />
      </PosedColorModeButton>
    </ButtonBar>
  )
}

export default MenuBar
