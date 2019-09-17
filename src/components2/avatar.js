/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import Gravatar from "react-gravatar"

const AvatarWrapper = styled.div`
  align-self: center;
  z-index: 20;
  display: flex;
  justify-content: center;
`

// const AvatarImage = styled.img`
//   height: 150px;
//   width: 150px;
//   border-radius: 90px;
//   perspective: 100px;
//   transition: all 1s ease-in-out;
//   :hover {
//     transform: scale(1.1);
//     box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
//   }
// `

const Avatar = () => {
  return (
    <AvatarWrapper>
      <Gravatar
        email="sbardian@gmail.com"
        size={150}
        style={{ borderRadius: "90px", perspective: "100px" }}
      />
    </AvatarWrapper>
  )
}

export default Avatar
