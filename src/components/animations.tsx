/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Styled } from "theme-ui"
import { FullpageAccordion, Panel } from "react-fullpage-accordion"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

interface AnimationData {
  title: string
  itemId: number
  top: string
  middle: string
  bottom: string
  imageUrl: string
  link: string
}

export const data: Array<AnimationData> = [
  {
    title: "Duck Animation",
    itemId: 1,
    top: "Give",
    middle: "Duck",
    bottom: "a try!",
    imageUrl: duckImage,
    link: "/duckPage",
  },
  {
    title: "Oberyn Animation",
    itemId: 2,
    top: "Give",
    middle: "Oberyn",
    bottom: "a try!",
    imageUrl: oberynImage,
    link: "/oberynPage",
  },
]

const Animations: React.FC = () => {
  return (
    <div>
      <Styled.h1>Animations</Styled.h1>
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
        </FullpageAccordion>
        {/* <AnimationImageLink
          imageSrc={oberynImage}
          to="/oberynPage"
          name="Oberyn"
        />
        <AnimationImageLink imageSrc={duckImage} to="/duckPage" name="Duck" /> */}
      </div>
    </div>
  )
}

export default Animations
