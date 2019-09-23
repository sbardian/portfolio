/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import Gravatar from "react-gravatar"

const Avatar = () => {
  return (
    <div
      sx={{
        alignSelf: "center",
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Gravatar
        email="sbardian@gmail.com"
        size={150}
        sx={{
          height: "150px",
          width: "150px",
          borderRadius: "90px",
          perspective: "100px",
          transition: "all 1s ease-in-out",
        }}
      />
    </div>
  )
}

export default Avatar
