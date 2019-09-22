/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import Menu from "./menu"
import Avatar from "./avatar"
import Social from "./social"

const Header = () => {
  return (
    <div>
      <Menu />
      <Avatar />
      <Social />
    </div>
  )
}

export default Header
