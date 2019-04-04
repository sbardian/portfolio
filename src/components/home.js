/** @jsx jsx */
// eslint-disable-next-line
import React from "react"
import { jsx, css } from "@emotion/core"
import "normalize.css"
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
// eslint-disable-next-line
import main from "../assets/main.css"

/**
 * TODO: find icons for bash, python, and others.
 */

export default () => {
  return (
    <section
      css={css`
        margin: 0 20px 20px 20px;
        font-size: 1.3em;
      `}
    >
      <h1>Welcome to my portfolio site!</h1>
      <p>
        {`I hope to update this site
        frequently with new projects, and updates to old projects. So check in
        often to make sure you don't miss anything!`}
      </p>
      <h2>Here are a few of the technologies I am proficient in.</h2>
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
          <img width="48" src={react} alt="react" />
        </div>
        <div>
          <img width="48" src={redux} alt="redux" />
        </div>
        <div>
          <img width="42" src={gatsby} alt="gatsby" />
        </div>
        <div>
          <img width="48" src={git} alt="git" />
        </div>
        <div>
          <img width="48" src={github} alt="github" />
        </div>
        <div>
          <img width="48" src={html5} alt="html5" />
        </div>
        <div>
          <img width="48" src={javascript} alt="javascript" />
        </div>
        <div>
          <img width="48" src={joomla} alt="joomla" />
        </div>
        <div>
          <img width="48" src={sharepoint} alt="sharepoint" />
        </div>
        <div>
          <img width="48" src={css3} alt="C#" />
        </div>
        <div>
          <img width="48" src={mongodb} alt="mongodb" />
        </div>
        <div>
          <img width="48" src={nodejs} alt="nodejs" />
        </div>
        <div>
          <img width="48" src={npm} alt="npm" />
        </div>
        <div>
          <img width="48" src={wordpress} alt="wordpress" />
        </div>
        <div>
          <img width="48" src={android} alt="android" />
        </div>
        <div>
          <img width="48" src={gitlab} alt="gitlab" />
        </div>
        <div>
          <img width="48" src={java} alt="java" />
        </div>
        <div>
          <img width="48" src={jquery} alt="jquery" />
        </div>
        <div>
          <img width="48" src={nginx} alt="nginx" />
        </div>
        <div>
          <img width="48" src={typescript} alt="typescript" />
        </div>
        <div>
          <img width="48" src={visualstudio} alt="visualstudio" />
        </div>
        <div>
          <img width="48" src={php} alt="php" />
        </div>
        <div>
          <img width="48" src={powershell} alt="powershell" />
        </div>
        <div>
          <img width="48" src={cSharp} alt="C#" />
        </div>
        <div>
          <img width="48" src={babel} alt="babel" />
        </div>
        <div>
          <img width="48" src={webpack} alt="webpack" />
        </div>
        <div>
          <img width="48" src={yarn} alt="yarn" />
        </div>
        <div>
          <img width="48" src={sequelize} alt="C#" />
        </div>
      </div>
      <h2>Interests</h2>
      <div>
        <p>
          {`As you might have assumed I enjoy development, but that is not 
            what this section is about (see the rest of the site for that). This is more about what I do when I'm not 
            developing.`}
        </p>
        <p>
          Most of my free time is spent hanging out with my three year old son
          and my wife. Trucks, trains, building forts and dirt are a pretty big
          deal around here.
        </p>
        <p>
          {`Yard work and home improvement is another thing 
            I enjoy. You know, "Well, um, actually a pretty nice little Saturday, 
            we're going to go to Home Depot. Yeah, buy some wallpaper, maybe 
            get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I 
            don't know, I don't know if we'll have enough time".`}
        </p>
        <p>
          I also spend a lot of time reading so I decided to make a site to
          track and share some of the books I have read recently. Simply called{" "}
          <a
            href="https://sbardian-books.netlify.com"
            alt="Books"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </a>
          . The list is not exhaustive of course, just books since I published
          the site, and maybe a couple more from that year.
        </p>
        <p>
          That is all I can think of at the moment. Though, this is an ever
          changing site, so more to come on. Maybe I will implement that blog
          someday...
        </p>
      </div>
    </section>
  )
}
