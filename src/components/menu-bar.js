/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx, css } from "theme-ui"
import posed from "react-pose"
import { GoThreeBars } from "react-icons/go"
import { FaLightbulb } from "react-icons/fa"
import useGetColorMode from "./hooks/useGetColorMode"

const ButtonBar = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto 1fr auto;
  align-content: center;
  margin: 20px 0;
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
    color: "#666",
    duration: 200,
  },
  light: {
    color: "#d1cb5e",
    duration: 200,
  },
})

const MenuBar = ({ menuStatus, setMenuStatus, colorMode, setColorMode }) => {
  useGetColorMode({ setColorMode })

  return (
    <ButtonBar>
      <div
        css={css`
          display: "block";
          @media (max-width: 520px) {
            display: none;
          }
        `}
      />
      <PosedMenuButton
        pose={menuStatus ? "open" : "closed"}
        type="button"
        aria-label="Menu"
        onClick={() => {
          setMenuStatus(!menuStatus)
        }}
        sx={{
          color: "primary",
          outline: 0,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "none",
          transition: "color ease 2ms",
          "&:focus": {
            outline: "thin dotted",
            outlineColor: "#e8175d",
          },
          "&:hover": {
            color: "#a1a1a1",
          },
          "@media (max-width: 520px)": {
            display: "block",
          },
        }}
      >
        <GoThreeBars size={30} />
      </PosedMenuButton>
      <PosedColorModeButton
        pose={colorMode}
        sx={{
          display: "flex",
          justifySelf: "end",
          border: "none",
          backgroundColor: "transparent",
          fontSize: "1.5rem",
          color: "#666",
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

MenuBar.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
  setMenuStatus: PropTypes.func.isRequired,
}

export default MenuBar
