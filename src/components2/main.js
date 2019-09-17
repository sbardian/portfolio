/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line
import React from "react"
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import Article from "./article"
import Technologies from "../components/technologies"

const Main = () => {
  return (
    <div>
      <Article>
        <h1>Brian Andrews</h1>
        <h2>Welcome to my portfolio site!</h2>
        <p>
          {`I hope to update this site
        frequently with new projects, and updates to old projects. So check in
        often to make sure you don't miss anything!`}
        </p>
      </Article>
      <Article type="dark">
        <h2>Technologies</h2>
        <Technologies />
      </Article>
      <Article type="light">
        <h2>Interests</h2>
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
          track and share some of the books I have read recently (
          <a
            href="https://sbardian-books.netlify.com"
            alt="Books"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </a>
          ).
        </p>
      </Article>
      <Article type="dark">
        <h2>Work</h2>
        <p>
          I have worked in IT since 2000 at{" "}
          <Link to="http://www.trinity-health.org/">Trinity Health</Link> as a
          System Administrator Senior. My web development work at Trinity Health
          started when I became the SharePoint Administrator for the Boise
          Region, though I have worked with web development for more than 25
          years. Using SharePoint as a framework, I have implemented and
          deployed two intranet solutions. These were massively customized
          intranet solutions. As a SharePoint Administrator I have also deployed
          many different SharePoint solutions for different department needs.
          Other web projects I have been involved in at Trinity Health include a
          Javascript Graphql Master Provider Index API, a React Native Find a
          Provider App, a Javascript Events and Daily Announcemnts calendar, and
          a Javascript Service Account Manager webapp.
        </p>
        <p>
          I have also worked with{" "}
          <Link to="https://seoidaho.com">SEO Idaho</Link> on many web
          development projects. Working with SEO Idaho has exposed me to
          countless different web framworks and languagues. I enjoy the
          challenge of not knowing what the next client could present.
        </p>
      </Article>
      <Article type="light">
        <h2>Thanks!</h2>
        <p>
          I hope you enjoy what you see and feel free to reach out to me via the{" "}
          <Link to="/contact">Contact</Link> page!
        </p>
      </Article>
    </div>
  )
}

export default Main
