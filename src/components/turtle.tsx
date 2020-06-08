/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import AnimationsNav from "./animations-nav"
import createAnimation from "./animations/turtle/index"

const TurtleAnimation: React.FC<Portfolio.AnimationProps> = ({
  animations,
}) => {
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
      <h3 sx={{ color: "text" }}>
        Click to feed the turtle! Warning, he is shy
      </h3>
      <AnimationsNav
        animations={animations}
        current={{ to: "/turtle-page", title: "Turtle" }}
      />
      <canvas
        sx={{
          background: "transparent",
        }}
        id="turtle-scene"
      />
    </div>
  )
}

export default TurtleAnimation
