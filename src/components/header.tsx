/** @jsx jsx */
import { jsx } from "theme-ui"
import Menu from "./menu"
import Avatar from "./avatar"

const Header: React.FC = () => {
  return (
    <div>
      <Menu />
      <Avatar />
    </div>
  )
}

export default Header
