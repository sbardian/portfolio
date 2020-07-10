/** @jsx jsx */
import { jsx } from "theme-ui"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"

const SocialIcons: React.FC = () => {
  return (
    <div
      sx={{
        paddingBottom: 3,
        display: "grid",
        gap: "0.67rem",
        gridTemplateColumns: "45px 45px 45px",
        justifyItems: "start",
      }}
    >
      <a
        href="https://github.com/sbardian"
        sx={{ color: "primary" }}
        aria-label="Github"
      >
        <FaGithub size="2.4em" />
      </a>
      <a
        href="https://twitter.com/xsbardianx"
        sx={{ color: "primary" }}
        aria-label="Twitter"
      >
        <FaTwitter size="2.4em" />
      </a>
      <a
        href="mailto:brian.andrews.dev@gmail.com?Subject=Dear Developer..."
        sx={{ color: "primary" }}
        aria-label="Email"
      >
        <FaEnvelope size="2.4em" />
      </a>
    </div>
  )
}

export default SocialIcons
