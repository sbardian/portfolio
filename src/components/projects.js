/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Fade from "react-reveal/Fade"
import mq from "./mediaQueries"

export default ({ children }) => {
  return (
    <section
      css={css`
        width: 90%;
        ${mq.sm(css`
          grid-template-columns: 1fr;
          width: 90%;
        `)};
      `}
    >
      <h2>Recent Projects</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        <Fade left>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <div>
              <h3
                css={css`
                  display: inline;
                  padding-right: 10px;
                `}
              >
                Debt Tracker
              </h3>
              <a
                css={css`
                  color: #e1e1e1;
                `}
                href="https://github.com/sbardian/debttrackerapi"
              >
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </a>
            </div>
          </article>
        </Fade>
        <Fade right>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <div>
              <h3
                css={css`
                  display: inline;
                  padding-right: 10px;
                `}
              >
                Lethe
              </h3>
              <a
                css={css`
                  color: #e1e1e1;
                `}
                href="https://github.com/sbardian/lethe"
              >
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </a>
            </div>
          </article>
        </Fade>
        <Fade left>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <div>
              <h3
                css={css`
                  display: inline;
                  padding-right: 10px;
                `}
              >
                Gatsby Breadcrumbs
              </h3>
              <a
                css={css`
                  color: #e1e1e1;
                `}
                href="https://github.com/sbardian/gatsby-plugin-breadcrumb"
              >
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </a>
            </div>
          </article>
        </Fade>
        <Fade right>
          <article>
            <img src="https://source.unsplash.com/random" alt="project1" />
            <div>
              <h3
                css={css`
                  display: inline;
                  padding-right: 10px;
                `}
              >
                Books
              </h3>
              <a
                css={css`
                  color: #e1e1e1;
                `}
                href="https://github.com/sbardian/books"
              >
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </a>
            </div>
          </article>
        </Fade>
      </div>
    </section>
  )
}
