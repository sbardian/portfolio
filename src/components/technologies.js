/** @jsx jsx */
/* eslint-disable-next-line */
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import cSharp from "../images/c-sharp.svg"
// import css3 from "../images/css3.svg"
import gatsby from "../images/gatsby.png"
// import git from "../images/git.svg"
// import github from "../images/github.svg"
// import html5 from "../images/html-5.svg"
import javascript from "../images/javascript.svg"
// import joomla from "../images/joomla.svg"
import sharepoint from "../images/microsoft-sharepoint.svg"
import mongodb from "../images/mongodb.svg"
import nodejs from "../images/nodejs.svg"
// import npm from "../images/npm.svg"
// import wordpress from "../images/wordpress.svg"
// import android from "../images/android.svg"
// import java from "../images/java.svg"
// import jquery from "../images/jquery.svg"
// import nginx from "../images/nginx.svg"
import typescript from "../images/typescript.svg"
// import visualstudio from "../images/visualstudio.svg"
// import php from "../images/php.svg"
// import powershell from "../images/powershell.svg"
// import babel from "../images/babel.svg"
// import webpack from "../images/webpack.svg"
// import yarn from "../images/yarn.png"
import sequelize from "../images/sequelize.png"
// import redux from "../images/redux.svg"
import react from "../images/react.svg"
import apollo from "../images/apollo.png"
import stdlib from "../images/stdlib.webp"
import heroku from "../images/heroku.png"
import hasura from "../images/hasura.png"
import jest from "../images/jest.png"
import reactrouter from "../images/reactrouter.png"
import graphql from "../images/graphql.png"
import cypress from "../images/cypress.png"

const TechImage = styled.img`
  width: 48px;
`

const Technologies = ({ technologies = [] }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 48px)",
        gridGap: 3,
        justifyContent: "center",
        background: "#e1e1e1",
        padding: 3,
        boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.75)",
      }}
    >
      {technologies.sort().map(tech => {
        if (tech === "react" || tech === "reactnative") {
          return <TechImage key={tech} src={react} alt="react" title="React" />
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
        // if (tech === "redux") {
        //   return <TechImage key={tech} src={redux} alt="Redux" title="Redux" />
        // }
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
        // if (tech === "git") {
        //   return <TechImage key={tech} src={git} alt="git" title="Git" />
        // }
        // if (tech === "github") {
        //   return (
        //     <TechImage key={tech} src={github} alt="github" title="Github" />
        //   )
        // }
        // if (tech === "html5") {
        //   return <TechImage key={tech} src={html5} alt="html5" title="HTML5" />
        // }
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
        // if (tech === "joomla") {
        //   return (
        //     <TechImage key={tech} src={joomla} alt="joomla" title="Joomla" />
        //   )
        // }
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
        // if (tech === "css3") {
        //   return <TechImage key={tech} src={css3} alt="css3" title="CSS3" />
        // }
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
        // if (tech === "npm") {
        //   return <TechImage key={tech} src={npm} alt="npm" title="npm" />
        // }
        // if (tech === "wordpress") {
        //   return (
        //     <TechImage
        //       key={tech}
        //       src={wordpress}
        //       alt="wordpress"
        //       title="WordPress"
        //     />
        //   )
        // }
        // if (tech === "android") {
        //   return (
        //     <TechImage key={tech} src={android} alt="android" title="Android" />
        //   )
        // }
        // if (tech === "java") {
        //   return <TechImage key={tech} src={java} alt="java" title="Java" />
        // }
        // if (tech === "jquery") {
        //   return (
        //     <TechImage key={tech} src={jquery} alt="jquery" title="JQuery" />
        //   )
        // }
        // if (tech === "nginx") {
        //   return <TechImage key={tech} src={nginx} alt="nginx" title="nginx" />
        // }
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
        // if (tech === "visualstudio") {
        //   return (
        //     <TechImage
        //       key={tech}
        //       src={visualstudio}
        //       alt="visualstudio"
        //       title="Visual Studio"
        //     />
        //   )
        // }
        // if (tech === "php") {
        //   return <TechImage key={tech} src={php} alt="php" title="PHP" />
        // }
        // if (tech === "powershell") {
        //   return (
        //     <TechImage
        //       key={tech}
        //       src={powershell}
        //       alt="powershell"
        //       title="PowerShell"
        //     />
        //   )
        // }
        if (tech === "csharp") {
          return <TechImage key={tech} src={cSharp} alt="C#" title="C#" />
        }
        // if (tech === "babel") {
        //   return <TechImage key={tech} src={babel} alt="babel" title="Babel" />
        // }
        // if (tech === "webpack") {
        //   return (
        //     <TechImage key={tech} src={webpack} alt="webpack" title="Webpack" />
        //   )
        // }
        // if (tech === "yarn") {
        //   return <TechImage key={tech} src={yarn} alt="yarn" title="Yarn" />
        // }
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

Technologies.defaultProps = {
  technologies: [],
}

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string),
}

export default Technologies
