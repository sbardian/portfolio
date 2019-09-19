// eslint-disable-next-line
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import mq from "./media-queries"

const SuccessWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;
  padding: 40px 0 0 0;
  margin: 0 20px 0 20px;
  ${mq.sm(css`
    grid-template-columns: 1fr;
    justify-items: start;
  `)}
`

export default () => (
  <SuccessWrapper>
    Thanks, your message has been sent successfully! I will get back to you as
    soon as possible.
  </SuccessWrapper>
)
