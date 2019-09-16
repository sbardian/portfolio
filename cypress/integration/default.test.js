/* eslint-disable no-undef */

beforeEach(() => {
  cy.visit("http://localhost:8000/")
})

describe("Home page tests", () => {
  it("Should pass", () => {
    cy.findByText("Brian Andrews").should("exist")
  })

  // it("Click Home and confirm welcome message", () => {
  //   cy.findByTestId("test-Home-button")
  //     .click()
  //     .findByText("Welcome to my portfolio site!")
  //     .should("exist")
  // })

  // it("Click projects and confirm title", () => {
  //   cy.findByTestId("test-Projects-button")
  //     .click()
  //     .findByText("Recent Projects")
  //     .should("exist")
  // })

  // it("Click contacts and confirm form is shown", () => {
  //   cy.findByTestId("test-Contact-button")
  //     .click()
  //     .findByTestId("test-contact-form")
  //     .should("exist")
  // })
})
