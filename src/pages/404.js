/* eslint-disable react/jsx-pascal-case */
import React from "react"
import { Styled } from "theme-ui"
import PageLayout from "../components/page-layout"

const NotFoundPage = () => (
  <PageLayout>
    <Styled.h1>NOT FOUND</Styled.h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
)

export default NotFoundPage
