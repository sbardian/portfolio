/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
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
      <a href="https://github.com/sbardian">
        <FaGithub size="2.5em" color="#e8175d" />
      </a>
      <a href="https://twitter.com/xsbardianx">
        <FaTwitter size="2.5em" color="#e8175d" />
      </a>
      <a href="mailto:sbardian@gmail.com?Subject=Dear Developer...">
        <FaEnvelope size="2.5em" color="#e8175d" />
      </a>
    </IconWrapper>
  )
}

export default SocialIcons
