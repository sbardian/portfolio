/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import Article from "./article"
import mq from "./media-queries"

export default () => (
  <Article type="dark">
    <p
      sx={{
        display: "grid",
        gridGap: 3,
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        width: "100%",
        paddingTop: 4,
        marginLeft: 3,
        marginRight: 3,
        fontSize: 1,
      }}
      css={css`
        ${mq.sm(css`
          grid-template-columns: 1fr;
          justify-items: start;
        `)}
      `}
    >
      Thanks, your message has been sent successfully! I will get back to you as
      soon as possible.
    </p>
  </Article>
)
