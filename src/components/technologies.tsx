/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import cSharp from "../images/c-sharp.svg"
import gatsby from "../images/gatsby.png"
import javascript from "../images/javascript.svg"
import sharepoint from "../images/microsoft-sharepoint.svg"
import mongodb from "../images/mongodb.svg"
import nodejs from "../images/nodejs.svg"
import typescript from "../images/typescript.svg"
import sequelize from "../images/sequelize.png"
import react from "../images/react.svg"
import apollo from "../images/apollo.png"
import stdlib from "../images/stdlib.webp"
import heroku from "../images/heroku.png"
import hasura from "../images/hasura.png"
import jest from "../images/jest.png"
import reactrouter from "../images/reactrouter.png"
import graphql from "../images/graphql.png"
import cypress from "../images/cypress.png"
import docker from "../images/docker.svg"

const TechImage = styled("img")`
  width: 48px;
`

const Technologies: React.FC<TechnologiesProps> = ({ technologies = [] }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 48px)",
        gap: 3,
        justifyContent: "center",
        backgroundColor: "techBackground",
        padding: 3,
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
      {technologies.sort().map((tech: string) => {
        if (tech === "react") {
          return <TechImage key={tech} src={react} alt="react" title="React" />
        }
        if (tech === "reactnative") {
          return (
            <TechImage
              key={tech}
              src={react}
              alt="react-native"
              title="React Native"
            />
          )
        }
        if (tech === "graphql") {
          return (
            <TechImage key={tech} src={graphql} alt="Graphql" title="Graphql" />
          )
        }
        if (tech === "apollo") {
          return (
            <TechImage key={tech} src={apollo} alt="Apollo" title="Apollo" />
          )
        }
        if (tech === "stdlib") {
          return (
            <TechImage key={tech} src={stdlib} alt="stdlib" title="stdlib" />
          )
        }
        if (tech === "heroku") {
          return (
            <TechImage key={tech} src={heroku} alt="Heroku" title="Heroku" />
          )
        }
        if (tech === "cypress") {
          return (
            <TechImage key={tech} src={cypress} alt="Cypress" title="Cypress" />
          )
        }
        if (tech === "hasura") {
          return (
            <TechImage key={tech} src={hasura} alt="Hasura" title="Hasura" />
          )
        }
        if (tech === "docker") {
          return (
            <TechImage key={tech} src={docker} alt="Docker" title="Docker" />
          )
        }
        if (tech === "jest") {
          return <TechImage key={tech} src={jest} alt="Jest" title="Jest" />
        }
        if (tech === "reactrouter") {
          return (
            <TechImage
              key={tech}
              src={reactrouter}
              alt="React Router"
              title="React Router"
            />
          )
        }
        if (tech === "gatsby") {
          return (
            <TechImage key={tech} src={gatsby} alt="gatsby" title="Gatsby" />
          )
        }
        if (tech === "javascript") {
          return (
            <TechImage
              key={tech}
              src={javascript}
              alt="javascript"
              title="Javascript"
            />
          )
        }
        if (tech === "sharepoint") {
          return (
            <TechImage
              key={tech}
              src={sharepoint}
              alt="sharepoint"
              title="SharePoint"
            />
          )
        }
        if (tech === "mongodb") {
          return (
            <TechImage key={tech} src={mongodb} alt="mongodb" title="MongoDB" />
          )
        }
        if (tech === "nodejs") {
          return (
            <TechImage key={tech} src={nodejs} alt="nodejs" title="NodeJS" />
          )
        }
        if (tech === "typescript") {
          return (
            <TechImage
              key={tech}
              src={typescript}
              alt="typescript"
              title="Typescript"
            />
          )
        }
        if (tech === "csharp") {
          return <TechImage key={tech} src={cSharp} alt="C#" title="C#" />
        }
        if (tech === "sequelize") {
          return (
            <TechImage
              key={tech}
              src={sequelize}
              alt="sequalize"
              title="Sequalize"
            />
          )
        }
        return null
      })}
    </div>
  )
}

export default Technologies
