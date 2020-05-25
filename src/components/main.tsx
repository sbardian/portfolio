/** @jsx jsx */
/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-pascal-case */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Article from "./article"
import Technologies from "./technologies"

const Main = () => {
  return (
    <div>
      <div
        css={{
          margin: "0 20px 0 20px",
        }}
      >
        <Styled.h1
          css={{
            fontSize: "3rem",
            marginBottom: "0.04rem",
          }}
        >
          Brian Andrews
        </Styled.h1>
        <Styled.h5
          css={{
            marginTop: "0.5rem",
            color: "white",
          }}
        >
          portfolio
        </Styled.h5>
      </div>
      <Article type="dark" name="baTechnologies">
        <Styled.h2 sx={{ color: "#adadad" }}>Technologies</Styled.h2>
        <Technologies />
      </Article>
      <Article type="light" name="baInterests">
        <Styled.h2>Interests</Styled.h2>
        <Styled.p>
          {`As you might have assumed I enjoy development, but that is not 
            what this section is about (see the rest of the site for that). This is more about what I do when I'm not 
            developing.`}
        </Styled.p>
        <Styled.p>
          Most of my free time is spent hanging out with my three year old son
          and my wife. Trucks, trains, building forts and dirt are a pretty big
          deal around here.
        </Styled.p>
        <Styled.p>
          {`I also enjoy doing yard and home improvement projects. You know, "Well, um, actually a pretty nice little Saturday, 
            we're going to go to Home Depot. Yeah, buy some wallpaper, maybe 
            get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I 
            don't know, I don't know if we'll have enough time".`}
        </Styled.p>
        <Styled.p>
          I spend a lot of time reading, so I decided to make a site to track
          and share some of the books I have read recently (
          <Styled.a
            href="https://sbardian-books.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Books
          </Styled.a>
          ).
        </Styled.p>
      </Article>
      <Article type="dark" name="baWork">
        <Styled.h2 sx={{ color: "#adadad" }}>Work</Styled.h2>
        <Styled.p>
          I have worked in IT since 2000 at{" "}
          <Styled.a
            sx={{ color: "linkDark" }}
            href="http://www.trinity-health.org/"
          >
            Trinity Health
          </Styled.a>{" "}
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
        </Styled.p>
        <Styled.p>
          I have also worked with{" "}
          <Styled.a sx={{ color: "linkDark" }} href="https://www.seoidaho.com">
            SEO Idaho
          </Styled.a>{" "}
          on many web development projects. Working with SEO Idaho has exposed
          me to countless different web framworks and languagues. I enjoy the
          challenge of not knowing what the next client could present.
        </Styled.p>
      </Article>
      <Article name="baThankYou">
        <Styled.h2>Thanks!</Styled.h2>
        <Styled.p>
          I hope you enjoy what you see and feel free to reach out to me via the{" "}
          <Link sx={{ color: "link" }} to="/contact">
            Contact
          </Link>{" "}
          page!
        </Styled.p>
      </Article>
    </div>
  )
}

export default Main
