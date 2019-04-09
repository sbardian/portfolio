/* eslint-disable no-undef */

beforeEach(() => {
  cy.visit("http://localhost:8000/")
})

describe("Home page tests", () => {
  it("Should find my name", () => {
    cy.getByText("Brian Andrews").should("exist")
  })

  it("Click Home and confirm welcome message", () => {
    cy.getByTestId("test-Home-button")
      .click()
      .getByText("Welcome to my portfolio site!")
      .should("exist")
  })

  it("Click projects and confirm title", () => {
    cy.getByTestId("test-Projects-button")
      .click()
      .getByText("Recent Projects")
      .should("exist")
  })

  it("Click contacts and confirm form is shown", () => {
    cy.getByTestId("test-Contact-button")
      .click()
      .getByTestId("test-contact-form")
      .should("exist")
  })
})
