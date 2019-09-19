import React from "react"

export default () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    setVisible(true)
  }, [])

  return visible
}
