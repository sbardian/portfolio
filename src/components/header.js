/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"

const Header = () => {
  return (
    <div>
      <div
        css={css`
          margin-bottom: 60px;
        `}
      >
        <ul
          css={css`
            margin: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            align-content: center;
          `}
        >
          <li
            css={css`
              background-color: transparent;
              background-size: cover;
              margin: 30px;
              border: 2px solid #e8175d;
              border-radius: 100%;
              height: 60px;
              width: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 200ms ease-in-out;
              &:hover {
                border-radius: 20%;
                background-color: #e8175d;
              }
            `}
          >
            <a
              label="navLink"
              href="https://gatsbyjs.org"
              data-name-start="H"
              data-name-end="ome"
              css={css`
                text-decoration: none;
                color: #e8175d;
                border-radius: 100%;
                font-size: 2rem;
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
                transition: font-size 400ms ease-in-out;
                &:before {
                  content: attr(data-name-start);
                }
                &:hover {
                  font-size: 2rem;
                  color: #e1e1e1;
                }
                &:hover:after {
                  content: attr(data-name-end);
                  font-size: 2rem;
                }
              `}
            />
          </li>
          <li
            css={css`
              background-color: transparent;
              background-size: cover;
              margin: 30px;
              border: 2px solid #e8175d;
              border-radius: 100%;
              height: 60px;
              width: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 200ms ease-in-out;
              &:hover {
                border-radius: 20%;
                background-color: #e8175d;
              }
            `}
          >
            <a
              label="navLink"
              href="https://gatsbyjs.org"
              data-name-start="P"
              data-name-end="rojects"
              css={css`
                text-decoration: none;
                color: #e8175d;
                border-radius: 100%;
                font-size: 2rem;
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
                transition: font-size 400ms ease-in-out;
                &:before {
                  content: attr(data-name-start);
                }
                &:hover {
                  font-size: 2rem;
                  color: #e1e1e1;
                }
                &:hover:after {
                  content: attr(data-name-end);
                  font-size: 2rem;
                }
              `}
            />
          </li>
          <li
            css={css`
              background-color: transparent;
              background-size: cover;
              margin: 30px;
              border: 2px solid #e8175d;
              border-radius: 100%;
              height: 60px;
              width: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 200ms ease-in-out;
              &:hover {
                border-radius: 20%;
                background-color: #e8175d;
              }
            `}
          >
            <a
              label="navLink"
              href="https://gatsbyjs.org"
              data-name-start="A"
              data-name-end="nimations"
              css={css`
                text-decoration: none;
                color: #e8175d;
                border-radius: 100%;
                font-size: 2rem;
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
                transition: font-size 400ms ease-in-out;
                &:before {
                  content: attr(data-name-start);
                }
                &:hover {
                  font-size: 2rem;
                  color: #e1e1e1;
                }
                &:hover:after {
                  content: attr(data-name-end);
                  font-size: 2rem;
                }
              `}
            />
          </li>
          <li
            css={css`
              background-color: transparent;
              background-size: cover;
              margin: 30px;
              border: 2px solid #e8175d;
              border-radius: 100%;
              height: 60px;
              width: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 200ms ease-in-out;
              &:hover {
                border-radius: 20%;
                background-color: #e8175d;
              }
            `}
          >
            <a
              label="navLink"
              href="https://gatsbyjs.org"
              data-name-start="C"
              data-name-end="ontact"
              css={css`
                text-decoration: none;
                color: #e8175d;
                border-radius: 100%;
                font-size: 2rem;
                display: flex;
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
                transition: font-size 400ms ease-in-out;
                &:before {
                  content: attr(data-name-start);
                }
                &:hover {
                  font-size: 2rem;
                  color: #e1e1e1;
                }
                &:hover:after {
                  content: attr(data-name-end);
                  font-size: 2rem;
                }
              `}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
