// eslint-disable-next-line
import React from "react"
import styled from "@emotion/styled"
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
import gitlab from "../images/gitlab.svg"
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
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

const TechWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 48px);
  grid-gap: 20px;
  margin: 20px;
  justify-content: center;
  background: #e1e1e1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`

const TechImage = styled.img`
  width: 48px;
`

export default () => (
  <TechWrapper>
    <TechImage src={react} alt="react" />
    <TechImage src={redux} alt="redux" />
    <TechImage src={gatsby} alt="gatsby" />
    <TechImage src={git} alt="git" />
    <TechImage src={github} alt="github" />
    <TechImage src={html5} alt="html5" />
    <TechImage src={javascript} alt="javascript" />
    <TechImage src={joomla} alt="joomla" />
    <TechImage src={sharepoint} alt="sharepoint" />
    <TechImage src={css3} alt="C#" />
    <TechImage src={mongodb} alt="mongodb" />
    <TechImage src={nodejs} alt="nodejs" />
    <TechImage src={npm} alt="npm" />
    <TechImage src={wordpress} alt="wordpress" />
    <TechImage src={android} alt="android" />
    <TechImage src={gitlab} alt="gitlab" />
    <TechImage src={java} alt="java" />
    <TechImage src={jquery} alt="jquery" />
    <TechImage src={nginx} alt="nginx" />
    <TechImage src={typescript} alt="typescript" />
    <TechImage src={visualstudio} alt="visualstudio" />
    <TechImage src={php} alt="php" />
    <TechImage src={powershell} alt="powershell" />
    <TechImage src={cSharp} alt="C#" />
    <TechImage src={babel} alt="babel" />
    <TechImage src={webpack} alt="webpack" />
    <TechImage src={yarn} alt="yarn" />
    <TechImage src={sequelize} alt="C#" />
  </TechWrapper>
)
