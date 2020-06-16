import * as React from "react"
import styled from "@emotion/styled"
import mq from "./media-queries"

const RestrictPageWidthDiv = styled("div")`
  display: grid;
  margin: 0 0.67rem 0 0.67rem;
  grid-template-columns: 1fr;
  ${mq.lg} {
    grid-template-columns: 992px;
  }
`

const RestrictPageWidth: React.FC = ({ children }) => (
  <RestrictPageWidthDiv>{children}</RestrictPageWidthDiv>
)

export default RestrictPageWidth
