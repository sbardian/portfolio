/** @jsx jsx */
/* eslint-disable react/jsx-pascal-case */
import { jsx, Styled } from "theme-ui"
import Article from "./article"
import AnimationImageLink from "./animation-image-link"
import duckImage from "../images/duck-image.png"
import oberynImage from "../images/oberyn-image.png"

const Animations: React.FC = () => {
  return (
    <div>
      <Styled.h1>Animations</Styled.h1>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
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
        <AnimationImageLink
          imageSrc={oberynImage}
          to="/oberynPage"
          name="Oberyn"
        />
        <AnimationImageLink imageSrc={duckImage} to="/duckPage" name="Duck" />
      </div>
    </div>
  )
}

export default Animations
