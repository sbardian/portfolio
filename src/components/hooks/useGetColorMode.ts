import * as React from "react"
import { window } from "browser-monads"

const useGetColorMode: UseGetColorMode = ({ setColorMode }) => {
  const storage = window.localStorage

  React.useEffect(() => {
    const currentMode: PortfolioColorMode = storage.getItem(
      "theme-ui-color-mode"
    ) as PortfolioColorMode
    if (currentMode) {
      setColorMode(currentMode)
    } else {
      setColorMode("light")
    }
  }, [])
}

export default useGetColorMode
