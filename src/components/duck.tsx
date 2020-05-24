/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import AnimationsNav from "./animations-nav"
import createAnimation from "./animations/duck/index"

interface DuckAnimationProps {
  animations: Array<{ title: string; to: string }>
}

const DuckAnimation: React.FC<DuckAnimationProps> = ({ animations }) => {
  React.useEffect(() => {
    createAnimation()
  })

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <AnimationsNav
        animations={animations}
        current={{ to: "/duckPage", title: "Duck" }}
      />
      <canvas
        css={css`
          background: transparent;
        `}
        id="ob-scene"
      />
    </div>
  )
}

export default DuckAnimation
