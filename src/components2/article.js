/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ArticleWrapper = styled.article`
  color: #a8a7a8;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
`

const Generic = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #a8a7a8;
  border-radius: 10px;
  margin: 0 20px;
`

const Light = styled.div`
  background-color: #cc527a;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e1e1e1;
  border-radius: 10px;
  margin: 0 20px;
`

const Dark = styled.div`
  background-color: #474747;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #a8a7a8;
  border-radius: 10px;
  margin: 0 20px;
`

const Article = ({ type, children }) => {
  return (
    <ArticleWrapper>
      {type === "light" && <Light>{children}</Light>}
      {type === "dark" && <Dark>{children}</Dark>}
      {type === undefined && <Generic>{children}</Generic>}
    </ArticleWrapper>
  )
}

export default Article

Article.defaultProps = {
  type: undefined,
  children: () => {},
}

Article.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
}
