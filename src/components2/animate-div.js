/* eslint-disable-next-line */
import React from "react"
import posed from "react-pose"

export default posed.div({
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "tween", ease: "easeIn", duration: 300 },
    },
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      y: { type: "tween", ease: "easeIn", duration: 300 },
    },
  },
})
