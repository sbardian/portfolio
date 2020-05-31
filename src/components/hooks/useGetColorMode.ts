import * as React from "react"
import { window } from "browser-monads"

interface SetColorMode {
  setColorMode: React.Dispatch<React.SetStateAction<string>>
}

const useGetColorMode = ({ setColorMode }: SetColorMode) => {
  const storage = window.localStorage

  React.useEffect(() => {
    setColorMode(storage.getItem("theme-ui-color-mode") || "light")
  }, [])
}

export default useGetColorMode
