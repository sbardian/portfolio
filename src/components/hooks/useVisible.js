/* eslint-disable no-undef */
import React from "react"
import { document } from "browser-monads"

export default ids => {
  const [top, setTop] = React.useState(0)
  const [elVisible, setElVisible] = React.useState({})

  const body = document.querySelector("body")

  body.addEventListener("scroll", () => {
    setTop(body.scrollTop)
  })

  React.useEffect(() => {
    let newObj
    ids.forEach(id => {
      if (elVisible[id] === undefined) {
        newObj = { ...newObj, [id]: true }
        return
      }
      newObj = { ...newObj, [id]: false }
      if (
        document.getElementById(id).getBoundingClientRect().top + 50 <=
        window.innerHeight
      ) {
        newObj = { ...newObj, [id]: true }
      } else {
        newObj = { ...newObj, [id]: false }
      }
    })
    setElVisible(newObj)
  }, [top])

  return elVisible
}
