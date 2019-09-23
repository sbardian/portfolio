/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import posed from "react-pose"
import { GoThreeBars } from "react-icons/go"
import { FaLightbulb } from "react-icons/fa"
import useGetColorMode from "./hooks/useGetColorMode"

const ButtonBar = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 40px 40px;
  justify-content: space-between;
  align-content: center;
  margin: 20px;
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
  default: {
    color: "#d1cb5e",
    duration: 200,
  },
})

const MenuBar = ({ menuStatus, setMenuStatus, colorMode, setColorMode }) => {
  useGetColorMode({ setColorMode })

  return (
    <ButtonBar>
      <PosedMenuButton
        pose={menuStatus ? "open" : "closed"}
        type="button"
        onClick={() => {
          setMenuStatus(!menuStatus)
        }}
        sx={{
          color: "primary",
        }}
        css={css`
          outline: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          display: none;
          &focus {
            outline: thin dotted;
            outline-color: #e8175d;
          }
          @media (max-width: 520px) {
            display: block;
          }
        `}
      >
        <GoThreeBars size={30} css={css``} />
      </PosedMenuButton>
      <PosedColorModeButton
        pose={colorMode}
        css={css`
          display: flex;
          justify-content: center;
          border: none;
          background-color: transparent;
          font-size: 1.5rem;
        `}
        type="button"
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default")
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
