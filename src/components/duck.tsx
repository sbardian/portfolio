/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimationsNav
        animations={animations}
        current={{ to: "/duckPage", title: "Duck" }}
      />
      <canvas
        sx={{
          background: "transparent",
        }}
        id="ob-scene"
      />
    </div>
  )
}

export default DuckAnimation
