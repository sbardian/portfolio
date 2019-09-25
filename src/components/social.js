/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

const SocialIcons = () => {
  return (
    <div
      sx={{
        margin: 3,
        paddingBottom: 3,
        display: "grid",
        gridGap: "20px",
        gridTemplateColumns: "35px 35px 35px",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        href="https://github.com/sbardian"
        sx={{ color: "primary" }}
        aria-label="Github"
      >
        <FaGithub size="2.5em" />
      </a>
      <a
        href="https://twitter.com/xsbardianx"
        sx={{ color: "primary" }}
        aria-label="Twitter"
      >
        <FaTwitter size="2.5em" />
      </a>
      <a
        href="mailto:sbardian@gmail.com?Subject=Dear Developer..."
        sx={{ color: "primary" }}
        aria-label="Email"
      >
        <FaEnvelope size="2.5em" />
      </a>
    </div>
  )
}

export default SocialIcons
