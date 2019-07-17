// eslint-disable-next-line
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import NavButton from "./nav-button"
import mq from "./media-queries"

const NavWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 20px 20px 20px;
  justify-items: center;
  padding: 40px 0 0 0;
  ${mq.md(css`
    width: auto;
    grid-template-columns: 1fr;
    justify-items: center;
  `)}
  ${mq.sm(css`
    grid-template-columns: 1fr;
    justify-items: start;
  `)}
`

export default () => (
  <NavWrapper>
    <NavButton title="Home" to="/" />
    <NavButton title="Projects" to="/projects" />
    <NavButton title="Animations" to="/animations" />
    <NavButton title="Contact" to="/contact" />
  </NavWrapper>
)
