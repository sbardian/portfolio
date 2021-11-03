/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Themed } from "theme-ui"
import { FullpageAccordion, Panel } from "react-fullpage-accordion"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image-new.png"
import oberynImage from "../images/oberyn-image-new.png"
import turtleImage from "../images/turtle-image.png"

const Animations: React.FC = () => (
    <div>
      <Themed.h1>Animations</Themed.h1>
      <div
        sx={{
          display: "grid",
          gap: "0.67rem",
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Article>
          <p>
            WARNING! These animations do not play well with mobile!!! They may
            or may not load on your mobile device. View them on a desktop for
            the best experience.
          </p>
        </Article>
        <FullpageAccordion height="500px">
          <Panel itemId="0" background={duckImage}>
            <p>Give</p>
            <p>
              <a href="/duckPage">Duck!</a>
            </p>
            <p>a try!</p>
          </Panel>
          <Panel itemId="1" background={oberynImage}>
            <p>Give</p>
            <p>
              <a href="/oberynPage">Oberyn!</a>
            </p>
            <p>a try!</p>
          </Panel>
          <Panel itemId="2" background={turtleImage}>
            <p>Give</p>
            <p>
              <a href="/turtle-page">Turtle!</a>
            </p>
            <p>a try!</p>
          </Panel>
        </FullpageAccordion>
      </div>
    </div>
  )

export default Animations
