import * as React from "react"
import { window } from "browser-monads"

const useShowMenu: UseShowMenu = (current) => {
  const [menuStatus, setMenuStatus] = React.useState(true)

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 520) {
        setMenuStatus(false)
      } else {
        setMenuStatus(true)
      }
    })
  })

  React.useEffect(() => {
    if (current <= 520) {
      setMenuStatus(false)
    } else {
      setMenuStatus(true)
    }
  }, [])
  return { menuStatus, setMenuStatus }
}

export default useShowMenu
