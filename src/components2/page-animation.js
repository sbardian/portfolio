// eslint-disable-next-line
import React from "react"
import posed from "react-pose"

const PageAnimation = posed.div({
  visible: {
    opacity: 1,
    transition: { ease: "anticipate", duration: 300 },
  },
  hidden: {
    opacity: 0,
    transition: { ease: "anticipate", duration: 300 },
  },
})

export default PageAnimation
