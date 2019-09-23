/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

const IconWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35px 35px 35px;
  padding-bottom: 20px;
  align-items: center;
  justify-items: center;
  color: #666;
  justify-content: center;
  margin: 20px;
`

const SocialIcons = () => {
  return (
    <IconWrapper>
      <a href="https://github.com/sbardian" sx={{ color: "primary" }}>
        <FaGithub size="2.5em" />
      </a>
      <a href="https://twitter.com/xsbardianx" sx={{ color: "primary" }}>
        <FaTwitter size="2.5em" />
      </a>
      <a
        href="mailto:sbardian@gmail.com?Subject=Dear Developer..."
        sx={{ color: "primary" }}
      >
        <FaEnvelope size="2.5em" />
      </a>
    </IconWrapper>
  )
}

export default SocialIcons
