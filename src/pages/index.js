/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import "normalize.css"
import main from "../assets/main.css"
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

// TODO: find icons for bash, python,  and others. . .

// TODO: fade a color overlay over the top image. or make new images with different colors and animate the change.
const IndexPage = () => (
  <Layout>
    <section>
      <h1>Welcome to this fine portfolio site!</h1>
      <p>
        Hello, welcome to my portfolio site! I hope to update this site as I
        move on down the developer trail. So there should be fresh projects
        showing up, old projects being updated and made even more awesome than
        they where when you last checked on them! So be sure to check back often
        so you don't miss anything. I might even add a blog at some point, but
        as you have probably already gathered, I'm not much of a writer, sooo...
      </p>
      <h2>Here are a few of the technologies I'm proficient in.</h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, 48px);
          grid-gap: 20px;
          margin: 20px;
          justify-content: center;
        `}
      >
        <div>
          <img width="48" src={css3} alt="C#" />
        </div>
        <div>
          <img width="42" src={gatsby} alt="C#" />
        </div>
        <div>
          <img width="48" src={git} alt="C#" />
        </div>
        <div>
          <img width="48" src={github} alt="C#" />
        </div>
        <div>
          <img width="48" src={html5} alt="C#" />
        </div>
        <div>
          <img width="48" src={javascript} alt="C#" />
        </div>
        <div>
          <img width="48" src={joomla} alt="C#" />
        </div>
        <div>
          <img width="48" src={sharepoint} alt="C#" />
        </div>
        <div>
          <img width="48" src={mongodb} alt="C#" />
        </div>
        <div>
          <img width="48" src={nodejs} alt="C#" />
        </div>
        <div>
          <img width="48" src={npm} alt="C#" />
        </div>
        <div>
          <img width="48" src={wordpress} alt="C#" />
        </div>
        <div>
          <img width="48" src={android} alt="C#" />
        </div>
        <div>
          <img width="48" src={gitlab} alt="C#" />
        </div>
        <div>
          <img width="48" src={java} alt="C#" />
        </div>
        <div>
          <img width="48" src={jquery} alt="C#" />
        </div>
        <div>
          <img width="48" src={nginx} alt="C#" />
        </div>
        <div>
          <img width="48" src={typescript} alt="C#" />
        </div>
        <div>
          <img width="48" src={visualstudio} alt="C#" />
        </div>
        <div>
          <img width="48" src={php} alt="C#" />
        </div>
        <div>
          <img width="48" src={powershell} alt="C#" />
        </div>
        <div>
          <img width="48" src={cSharp} alt="C#" />
        </div>
        <div>
          <img width="48" src={babel} alt="C#" />
        </div>
        <div>
          <img width="48" src={webpack} alt="C#" />
        </div>
        <div>
          <img width="48" src={yarn} alt="C#" />
        </div>
        <div>
          <img width="48" src={sequelize} alt="C#" />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
