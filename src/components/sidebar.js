/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import mq from "./media-queries"
import sidebarBg from "../images/sidebar-bg.jpg"
import overlay from "../images/overlay.png"
import avatar from "../images/avatar.jpg"
import gatsby from "../images/gatsby.png"

const SidebarContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 150px 250px;
  justify-content: center;
  align-content: center;
  min-height: 100%;
  min-width: 35%;
  position: fixed;
  background: lightgray;
  background-image: url(${overlay}), url(${sidebarBg});
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s linear;
  padding: 20px 0 20px 0px;
  ${mq.xl(css`
    min-width: 100%;
    min-height: 300px;
    position: absolute;
  `)};
  ${mq.sm(css`
    grid-template-columns: 1fr;
    justify-items: center;
    min-height: 500px;
  `)}
`

const AvatarWrapper = styled.div`
  align-self: center;
  z-index: 20;
`

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  padding-top: 20px;
`

const PersonalInfoWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 60px 150px 50px;
  color: #474444;
  transition: all 8s;
  z-index: 20;
  ${mq.sm(css`
    grid-template-rows: 80px auto 50px;
    justify-items: center;
  `)}
`

const AboutMe = styled.span`
  padding: 0px 20px 0px 20px;
`

const IconWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 35px 35px 35px;
  padding-bottom: 20px;
  align-items: center;
  justify-items: center;
  color: #666;
`

const GatsbyIconWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  right: 5px;
`

const GatsbyIcon = styled.img`
  height: 1em;
`

export default () => {
  return (
    <SidebarContainer id="sidebar-container">
      <AvatarWrapper>
        <Avatar src={avatar} alt="Avatar" />
      </AvatarWrapper>
      <PersonalInfoWrapper>
        <h1>Brian Andrews</h1>
        <AboutMe>
          {`Web developer and problem solver! I enjoy using code to solve
            complex problems so other people don't have to. Hopefully you will
            find something here to make your life easier.`}
        </AboutMe>
        <IconWrapper>
          <a href="https://github.com/sbardian">
            <FaGithub size="2.5em" />
          </a>
          <a href="https://twitter.com/xsbardianx">
            <FaTwitter size="2.5em" />
          </a>
          <a href="mailto:sbardian@gmail.com?Subject=Dear Developer...">
            <FaEnvelope size="2.5em" />
          </a>
        </IconWrapper>
      </PersonalInfoWrapper>
      <GatsbyIconWrapper>
        <a href="https://gatsby.com">
          <GatsbyIcon src={gatsby} alt="Gatsby" title="Built with Gatsby" />
        </a>
      </GatsbyIconWrapper>
    </SidebarContainer>
  )
}
