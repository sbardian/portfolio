/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { PageContext } from "./page-context"
import Avatar from "./avatar"
import Social from "./social"

const StyledUL = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
`

const StyledLI = styled.li`
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
  transition: all 200ms ease-in-out;
  &:hover {
    border-radius: 20%;
    background-color: #e8175d;
  }
`

const StyledHref = styled.a`
  text-decoration: none;
  color: #e8175d;
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
    color: #e1e1e1;
  }
  &:hover:after {
    content: attr(data-name-end);
    font-size: 2rem;
  }
`

const Header = () => {
  const { setPage } = React.useContext(PageContext)

  const updatePage = (e, value) => {
    e.preventDefault()
    setPage(value)
  }
  return (
    <div>
      <StyledUL>
        <StyledLI>
          <StyledHref
            onClick={e => {
              updatePage(e, "home")
            }}
            label="navLink"
            href="https://gatsbyjs.org"
            data-name-start="H"
            data-name-end="ome"
          />
        </StyledLI>
        <StyledLI>
          <StyledHref
            onClick={e => {
              updatePage(e, "projects")
            }}
            label="navLink"
            href="https://gatsbyjs.org"
            data-name-start="P"
            data-name-end="rojects"
          />
        </StyledLI>
        <StyledLI>
          <StyledHref
            onClick={e => {
              updatePage(e, "animations")
            }}
            label="navLink"
            href="https://gatsbyjs.org"
            data-name-start="A"
            data-name-end="nimations"
          />
        </StyledLI>
        <StyledLI>
          <StyledHref
            onClick={e => {
              updatePage(e, "contact")
            }}
            label="navLink"
            href="https://gatsbyjs.org"
            data-name-start="C"
            data-name-end="ontact"
          />
        </StyledLI>
      </StyledUL>
      <Avatar />
      <Social />
    </div>
  )
}

export default Header
