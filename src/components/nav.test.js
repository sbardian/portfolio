import React from "react"
import { render } from "@testing-library/react"
import Nav from "./nav"

test("should render nav bar", () => {
  const { getByTestId } = render(<Nav />)
  const nav = getByTestId("nav-test")
  const navHome = getByTestId("test-Home-button")
  const navProjects = getByTestId("test-Projects-button")
  const navAnimations = getByTestId("test-Animations-button")
  const navContact = getByTestId("test-Contact-button")
  expect(nav).toContainElement(navHome)
  expect(nav).toContainElement(navProjects)
  expect(nav).toContainElement(navAnimations)
  expect(nav).toContainElement(navContact)
})
