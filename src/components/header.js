/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { jsx, css } from "@emotion/core"
import posed from "react-pose"
import { window } from "browser-monads"
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import Avatar from "./avatar"
import Social from "./social"
import useShowMenu from "./hooks/useShowMenu"

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
    css={css`
      background-color: transparent;
      background-size: cover;
      margin: 30px;
      border: 2px solid #e8175d;
      border-radius: 100%;
      height: 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #e8175d;
      transition: all 200ms ease-in-out;
      &:hover {
        border-radius: 20px;
        background-color: #e8175d;
        color: #e1e1e1;
      }
      @media (max-width: 520px) {
        border-radius: 0;
        margin: 0 20px 0 20px;
        width: auto;
      }
    `}
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

const PosedButton = posed.button({
  open: {
    rotate: "90deg",
    duration: 200,
  },
  closed: {
    rotate: "0deg",
    duration: 200,
  },
})

const Header = () => {
  const { menuStatus, setMenuStatus } = useShowMenu(window.innerWidth)

  return (
    <div>
      <PosedButton
        pose={menuStatus ? "open" : "closed"}
        type="button"
        onClick={() => {
          setMenuStatus(!menuStatus)
        }}
        css={css`
          outline: 0;
          background: transparent;
          border: none;
          color: #e8175d;
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
        <GoThreeBars
          size={30}
          css={css`
            margin: 20px;
          `}
        />
      </PosedButton>
      <PosedThinUL
        pose={menuStatus ? "open" : "closed"}
        css={css`
          max-height: 320px;
          min-height: 124px;
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
          <StyledLink
            to="/contact"
            data-name-start="C"
            data-name-end="ontact"
          />
        </PosedStyledThinLI>
      </PosedThinUL>
      <Avatar />
      <Social />
    </div>
  )
}

export default Header
