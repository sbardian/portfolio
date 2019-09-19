/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import gatsby from "../images/gatsby.png"

const Footer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 20px;
`

const BuiltWith = styled.pre`
  font-size: 0.8rem;
`

const GatsbyImage = styled.img`
  height: 3em;
`

export default () => (
  <Footer>
    <BuiltWith>built with</BuiltWith>
    <a data-testid="footer-link-test" href="https://gatsbyjs.org">
      <GatsbyImage src={gatsby} alt="Gatsby" title="Built with Gatsby" />
    </a>
  </Footer>
)
