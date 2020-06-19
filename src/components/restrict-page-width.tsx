import * as React from "react"
import styled from "@emotion/styled"
import mq from "./media-queries"

const RestrictPageWidthDiv = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  ${mq.lg} {
    grid-template-columns: 992px;
  }
`

const RestrictPageWidth: React.FC = ({ children }) => (
  <RestrictPageWidthDiv>{children}</RestrictPageWidthDiv>
)

export default RestrictPageWidth
