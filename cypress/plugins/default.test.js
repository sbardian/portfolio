describe("placeholder test", () => {
  it("should pass", () => {
    cy.visit("http://localhost:8000/")
      .getByText("Brian Andrews")
      .should("exist")
  })
})
