import React from "react"
// eslint-disable-next-line
import { render } from "@testing-library/react"
import AnimationImageLink from "./animation-image-link"
import oberynImage from "../images/oberyn-image.png"

const MockAnimationImageLink: Portfolio.AnimationImageLinkProps = {
  imageSrc: oberynImage,
  name: "Oberyn",
  to: "/oberyn",
}

test("Displays animation image link", () => {
  const { queryByTestId } = render(
    <AnimationImageLink
      imageSrc={MockAnimationImageLink.imageSrc}
      name={MockAnimationImageLink.name}
      to={MockAnimationImageLink.to}
    />
  )
  const imageLink = queryByTestId("image-link")
  expect(imageLink).toBeTruthy()
  expect(imageLink).toHaveAttribute("href", "/oberyn")
  const image = queryByTestId("image")
  expect(image).toBeTruthy()
  expect(image).toHaveAttribute("alt", MockAnimationImageLink.name)
  expect(image).toHaveAttribute("src", MockAnimationImageLink.imageSrc)
})
