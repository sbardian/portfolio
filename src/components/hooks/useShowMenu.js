import React from "react"
import { window } from "browser-monads"

export default current => {
  const [menuStatus, setMenuStatus] = React.useState(false)

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
