/** @jsx jsx */
/* eslint-disable-next-line */
import React from "react"
import styled from "@emotion/styled"
import { jsx } from "theme-ui"
import cSharp from "../images/c-sharp.svg"
import css3 from "../images/css3.svg"
import gatsby from "../images/gatsby.png"
import git from "../images/git.svg"
import github from "../images/github.svg"
import html5 from "../images/html-5.svg"
import javascript from "../images/javascript.svg"
import joomla from "../images/joomla.svg"
import sharepoint from "../images/microsoft-sharepoint.svg"
import mongodb from "../images/mongodb.svg"
import nodejs from "../images/nodejs.svg"
import npm from "../images/npm.svg"
import wordpress from "../images/wordpress.svg"
import android from "../images/android.svg"
import java from "../images/java.svg"
import jquery from "../images/jquery.svg"
import nginx from "../images/nginx.svg"
import typescript from "../images/typescript.svg"
import visualstudio from "../images/visualstudio.svg"
import php from "../images/php.svg"
import powershell from "../images/powershell.svg"
import babel from "../images/babel.svg"
import webpack from "../images/webpack.svg"
import yarn from "../images/yarn.png"
import sequelize from "../images/sequelize.png"
import redux from "../images/redux.svg"
import react from "../images/react.svg"

const TechImage = styled.img`
  width: 48px;
`

export default () => (
  <div
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, 48px)",
      gridGap: 3,
      justifyContent: "center",
      background: "#e1e1e1",
      padding: 3,
      borderRadius: "10px",
      boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.75)",
    }}
  >
    <TechImage src={react} alt="react" title="React" />
    <TechImage src={redux} alt="redux" title="Redux" />
    <TechImage src={gatsby} alt="gatsby" title="Gatsby" />
    <TechImage src={git} alt="git" title="Git" />
    <TechImage src={github} alt="github" title="Github" />
    <TechImage src={html5} alt="html5" title="HTML5" />
    <TechImage src={javascript} alt="javascript" title="Javascript" />
    <TechImage src={joomla} alt="joomla" title="Joomla" />
    <TechImage src={sharepoint} alt="sharepoint" title="SharePoint" />
    <TechImage src={css3} alt="css3" title="CSS3" />
    <TechImage src={mongodb} alt="mongodb" title="MongoDB" />
    <TechImage src={nodejs} alt="nodejs" title="NodeJS" />
    <TechImage src={npm} alt="npm" title="npm" />
    <TechImage src={wordpress} alt="wordpress" title="WordPress" />
    <TechImage src={android} alt="android" title="Android" />
    <TechImage src={java} alt="java" title="Java" />
    <TechImage src={jquery} alt="jquery" title="JQuery" />
    <TechImage src={nginx} alt="nginx" title="nginx" />
    <TechImage src={typescript} alt="typescript" title="Typescript" />
    <TechImage src={visualstudio} alt="visualstudio" title="Visual Studio" />
    <TechImage src={php} alt="php" title="PHP" />
    <TechImage src={powershell} alt="powershell" title="PowerShell" />
    <TechImage src={cSharp} alt="C#" title="C#" />
    <TechImage src={babel} alt="babel" title="Babel" />
    <TechImage src={webpack} alt="webpack" title="Webpack" />
    <TechImage src={yarn} alt="yarn" title="Yarn" />
    <TechImage src={sequelize} alt="sequalize" title="Sequalize" />
  </div>
)
