/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ArticleWrapper = styled.article`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Generic = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
`

const Light = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const Dark = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const Article = ({ type, children, name }) => {
  return (
    <ArticleWrapper
      sx={{
        color: "text",
        fontSize: 1,
      }}
    >
      {type === "light" && (
        <Light
          sx={{
            backgroundColor: "backgroundLight",
            color: "textLight",
          }}
          id={name}
        >
          {children}
        </Light>
      )}
      {type === "dark" && (
        <Dark
          sx={{
            backgroundColor: "backgroundDark",
            color: "text",
          }}
          id={name}
        >
          {children}
        </Dark>
      )}
      {type === undefined && (
        <Generic
          sx={{
            color: "textLight",
          }}
          id={name}
        >
          {children}
        </Generic>
      )}
    </ArticleWrapper>
  )
}

export default Article

Article.defaultProps = {
  type: undefined,
  children: () => {},
  name: "",
}

Article.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
}
