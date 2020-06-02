/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const AnimationImageLink: React.FC<Portfolio.AnimationImageLinkProps> = ({
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
        data-testid="image-link"
        sx={{
          fontSize: "24pt",
          color: "white",
        }}
        to={to}
      >
        <img
          data-testid="image"
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
