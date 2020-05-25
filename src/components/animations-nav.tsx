/** @jsx jsx */
import { findIndex } from "lodash"
import { GoChevronRight, GoChevronLeft } from "react-icons/go"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

interface AnimationNavProps {
  animations: Array<{
    to: string
    title: string
  }>

  current: {
    title: string
    to: string
  }
}

const AnimationNav: React.FC<AnimationNavProps> = ({ animations, current }) => {
  const currentIndex = findIndex(
    animations,
    (animation) => animation.title === current.title
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
      css={{
        display: "grid",
        gridAutoRows: "50px 50px",
        justifyItems: "center",
        fontSize: "28pt",
        top: "450px",
      }}
    >
      <Link to={`${current.to}`}>{current.title}</Link>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "auto 800px auto",
          justifyContent: "space-between",
        }}
      >
        <Link
          css={{
            color: "white",
          }}
          to={animations[previous].to}
        >
          <GoChevronLeft size={100} />
        </Link>
        <div />
        <Link
          css={{
            color: "white",
          }}
          to={animations[next].to}
        >
          <GoChevronRight size={100} />
        </Link>
      </div>
    </div>
  )
}

export default AnimationNav
