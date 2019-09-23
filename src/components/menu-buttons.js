/** @jsx jsx */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import posed from "react-pose"
import { Link } from "gatsby"

const PosedThinUL = posed.ul({
  open: {
    x: "0%",
    delayChildren: 100,
    staggerChildren: 100,
    height: "auto",
  },
  closed: {
    x: "-100%",
    delay: 700,
    delayChildren: 0,
    staggerChildren: 50,
    height: 0,
    staggerDirection: -1,
  },
})

const PosedThinLI = posed.li({
  open: { opacity: 1, delay: 100 },
  closed: { opacity: 0, duration: 0 },
})

const PosedStyledThinLI = ({ children }) => (
  <PosedThinLI
    sx={{
      borderColor: "primary",
      color: "primary",
      backgroundColor: "transparent",
      backgroundSize: "cover",
      margin: "30px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "100%",
      height: "60px",
      width: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 200ms ease-in-out",
      "&:hover": {
        borderRadius: "20px",
        backgroundColor: "primary",
        color: "text",
      },
      "@media (max-width: 520px)": {
        borderRadius: "0",
        margin: "0 20px 0 20px",
        width: "auto",
        "&:hover": {
          borderRadius: "20px",
          backgroundColor: "primary",
          color: "textLight",
        },
      },
    }}
  >
    {children}
  </PosedThinLI>
)

PosedStyledThinLI.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledLink = props => (
  <Link
    {...props}
    css={css`
      text-decoration: none;
      color: inherit;
      border-radius: 100%;
      font-size: 2rem;
      display: flex;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      transition: font-size 400ms ease-in-out;
      &:before {
        content: attr(data-name-start);
      }
      &:hover {
        font-size: 2rem;
        color: inherit;
      }
      &:hover:after {
        content: attr(data-name-end);
        font-size: 2rem;
      }
      @media (max-width: 520px) {
        ::after {
          content: attr(data-name-end);
        }
      }
    `}
  />
)

const MenuButtons = ({ menuStatus }) => {
  return (
    <PosedThinUL
      pose={menuStatus ? "open" : "closed"}
      css={css`
        max-height: 320px;
        margin: 0;
        margin-top: 20px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-content: start;
        padding: 0;
        margin-bottom: 20px;
        @media (max-width: 520px) {
          display: grid;
          grid-gap: 20px;
          min-height: 0px;
          grid-template-columns: minmax(200px, 1fr);
          grid-template-rows: repeat(auto-fit);
        }
      `}
    >
      <PosedStyledThinLI>
        <StyledLink to="/" data-name-start="H" data-name-end="ome" />
      </PosedStyledThinLI>
      <PosedStyledThinLI>
        <StyledLink
          to="/projects"
          data-name-start="P"
          data-name-end="rojects"
        />
      </PosedStyledThinLI>
      <PosedStyledThinLI>
        <StyledLink
          to="/animations"
          data-name-start="A"
          data-name-end="nimations"
        />
      </PosedStyledThinLI>
      <PosedStyledThinLI>
        <StyledLink to="/contact" data-name-start="C" data-name-end="ontact" />
      </PosedStyledThinLI>
    </PosedThinUL>
  )
}

MenuButtons.propTypes = {
  menuStatus: PropTypes.bool.isRequired,
}

export default MenuButtons
