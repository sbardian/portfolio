/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-pascal-case */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import Article from "./article"
import Technologies from "./technologies"

const Main: React.FC = () => (
    <div>
      <div
        sx={{
          margin: "0 0.67rem 0 0.67rem",
        }}
      >
        <Themed.h1
          sx={{
            fontSize: "3rem",
            marginBottom: "0.04rem",
          }}
        >
          Brian Andrews
        </Themed.h1>
        <Themed.h5
          sx={{
            marginTop: "0.5rem",
            color: "white",
          }}
        >
          portfolio
        </Themed.h5>
      </div>
      <Article name="baTechnologies">
        <Themed.h2 sx={{ color: "#adadad" }}>Technologies</Themed.h2>
        <Technologies />
      </Article>
      <Article name="baInterests">
        <Themed.h2>Interests</Themed.h2>
        <Themed.p>
          {`As you might have assumed I enjoy development, but that is not 
            what this section is about (see the rest of the site for that). This is more about what I do when I'm not 
            developing.`}
        </Themed.p>
        <Themed.p>
          Most of my free time is spent hanging out with my three year old son
          and my wife. Trucks, trains, building forts and dirt are a pretty big
          deal around here.
        </Themed.p>
        <Themed.p>
          {`I also enjoy doing yard and home improvement projects. You know, "Well, um, actually a pretty nice little Saturday, 
            we're going to go to Home Depot. Yeah, buy some wallpaper, maybe 
            get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I 
            don't know, I don't know if we'll have enough time".`}
        </Themed.p>
        <Themed.p>
          I spend a lot of time reading, so I decided to make a site to track
          and share some of the books I have read recently (
          <Themed.a
            href="https://sbardian-books.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </Themed.a>
          ).
        </Themed.p>
      </Article>
      <Article name="baWork">
        <Themed.h2 sx={{ color: "#adadad" }}>Work</Themed.h2>
        <Themed.p>
          I have worked in IT since 2000 at{" "}
          <Themed.a
            sx={{ color: "linkDark" }}
            href="http://www.trinity-health.org/"
          >
            Trinity Health
          </Themed.a>{" "}
          as a System Administrator Senior. My web development work at Trinity
          Health started when I became the SharePoint Administrator for the
          Boise Region, though I have worked with web development for more than
          25 years. Using SharePoint as a framework, I have implemented and
          deployed two intranet solutions. These were massively customized
          intranet solutions. As a SharePoint Administrator I have also deployed
          many different SharePoint solutions for different department needs.
          Other web projects I have been involved in at Trinity Health include a
          Javascript Graphql Master Provider Index API, a React Native Find a
          Provider App, a Javascript Events and Daily Announcemnts calendar, and
          a Javascript Service Account Manager webapp.
        </Themed.p>
        <Themed.p>
          I have also worked with{" "}
          <Themed.a sx={{ color: "linkDark" }} href="https://www.seoidaho.com">
            SEO Idaho
          </Themed.a>{" "}
          on many web development projects. Working with SEO Idaho has exposed
          me to countless different web framworks and languagues. I enjoy the
          challenge of not knowing what the next client could present.
        </Themed.p>
      </Article>
      <Article name="baThankYou">
        <Themed.h2>Thanks!</Themed.h2>
        <Themed.p>
          I hope you enjoy what you see and feel free to reach out to me via the{" "}
          <Link sx={{ color: "link" }} to="/contact">
            Contact
          </Link>{" "}
          page!
        </Themed.p>
      </Article>
    </div>
  )

export default Main
