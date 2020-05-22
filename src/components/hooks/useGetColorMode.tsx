// eslint-disable-next-line
import * as React from "react"
import { window } from "browser-monads"

export default ({ setColorMode }) => {
  const storage = window.localStorage

  React.useEffect(() => {
    setColorMode(storage.getItem("theme-ui-color-mode"))
  }, [])
}
