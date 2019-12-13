/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import Menu from "./menu"
import Avatar from "./avatar"

const Header = () => {
  return (
    <div>
      <Menu />
      <Avatar />
    </div>
  )
}

export default Header
