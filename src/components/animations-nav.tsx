/** @jsx jsx */
import * as React from "react"
import { findIndex } from "lodash"
import { GoChevronRight, GoChevronLeft } from "react-icons/go"
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

interface AnimationNavProps {
  animations: [
    {
      title: string
      to: string
    }
  ]
  current: {
    title: string
    to: string
  }
}

const AnimationNav: React.FunctionComponent<AnimationNavProps> = ({
  animations,
  current,
}) => {
  const currentIndex = findIndex(
    animations,
    (animation: { title: string }) => animation.title === current.title
  )

  let next = currentIndex + 1
  let previous = currentIndex - 1
  if (previous < 0) {
    previous = animations.length - 1
  }
  if (next > animations.length - 1) {
    next = 0
  }

  return (
    <div
      css={css`
        display: grid;
        grid-auto-rows: 50px 150px;
        justify-items: center;
        font-size: 28pt;
        top: 450px;
      `}
    >
      <Link to={`${current.to}`}>{current.title}</Link>
      <div
        css={css`
          display: grid;
          grid-template-columns: auto 800px auto;
          justify-content: space-between;
        `}
      >
        <Link
          css={css`
            color: white;
          `}
          to={animations[previous].to}
        >
          <GoChevronLeft size={100} />
        </Link>
        <div />
        <Link
          css={css`
            color: white;
          `}
          to={animations[next].to}
        >
          <GoChevronRight size={100} />
        </Link>
      </div>
    </div>
  )
}

export default AnimationNav
