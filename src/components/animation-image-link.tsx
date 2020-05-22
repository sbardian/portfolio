/** @jsx jsx */
import * as React from "react"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

interface AnimationImageLinkProps {
  imageSrc: string
  to: string
  name: string
}

const AnimationImageLink: React.FunctionComponent<AnimationImageLinkProps> = ({
  imageSrc,
  to,
  name,
}) => {
  return (
    <div
      css={css`
        display: flex;
        margin: 10px;
      `}
    >
      <Link
        css={css`
          font-size: 24pt;
          color: white;
        `}
        to={to}
      >
        <img
          css={css`
            margin: 0;
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 450px;
          `}
          src={imageSrc}
          alt={name}
        />
      </Link>
    </div>
  )
}

export default AnimationImageLink
