/* eslint-disable react/jsx-pascal-case */
import * as React from "react"
import { Styled } from "theme-ui"
import PageLayout from "../components/page-layout"
import RestrictPageWidth from "../components/restrict-page-width"

const NotFoundPage: React.FC = () => (
  <PageLayout>
    <RestrictPageWidth>
      <Styled.h1>NOT FOUND</Styled.h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </RestrictPageWidth>
  </PageLayout>
)

export default NotFoundPage
