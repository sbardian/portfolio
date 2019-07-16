// eslint-disable-next-line
import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Technologies from "./technologies"
import "normalize.css"
// eslint-disable-next-line
import main from "../assets/main.css"

/**
 * TODO: find icons for bash, python, and others.
 */

const SectionWrapper = styled.section`
  margin: 0 20px 20px 20px;
  font-size: 1.3em;
`

export default () => (
  <SectionWrapper>
    <h1>Welcome to my portfolio site!</h1>
    <p>
      {`I hope to update this site
        frequently with new projects, and updates to old projects. So check in
        often to make sure you don't miss anything!`}
    </p>
    <h2>Technologies</h2>
    <Technologies />
    <h2>Interests</h2>
    <div>
      <p>
        {`As you might have assumed I enjoy development, but that is not 
            what this section is about (see the rest of the site for that). This is more about what I do when I'm not 
            developing.`}
      </p>
      <p>
        Most of my free time is spent hanging out with my three year old son and
        my wife. Trucks, trains, building forts and dirt are a pretty big deal
        around here.
      </p>
      <p>
        {`Yard work and home improvement is another thing 
            I enjoy. You know, "Well, um, actually a pretty nice little Saturday, 
            we're going to go to Home Depot. Yeah, buy some wallpaper, maybe 
            get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I 
            don't know, I don't know if we'll have enough time".`}
      </p>
      <p>
        I also spend a lot of time reading so I decided to make a site to track
        and share some of the books I have read recently. Simply called{" "}
        <a
          href="https://sbardian-books.netlify.com"
          alt="Books"
          target="_blank"
          rel="noopener noreferrer"
        >
          Books
        </a>
        .
      </p>
      <p>
        I hope you enjoy what you see and feel free to reach out to me via the{" "}
        <Link to="/contact">Contact</Link> page!
      </p>
    </div>
  </SectionWrapper>
)
