/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

interface AnimationImageLinkProps {
  imageSrc: string
  to: string
  name: string
}

const AnimationImageLink: React.FC<AnimationImageLinkProps> = ({
  imageSrc,
  to,
  name,
}) => {
  return (
    <div
      sx={{
        display: "flex",
        margin: "10px",
      }}
    >
      <Link
        sx={{
          fontSize: "24pt",
          color: "white",
        }}
        to={to}
      >
        <img
          sx={{
            margin: "0px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "450px",
          }}
          src={imageSrc}
          alt={name}
        />
      </Link>
    </div>
  )
}

export default AnimationImageLink
