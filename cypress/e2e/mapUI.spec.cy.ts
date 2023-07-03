describe('Map UI', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('Should display a map as the page background', () => {
    cy.get('[data-cy="map"]').should('exist')
  })
  it('Should contain a searchbar', () => {
    cy.get('[data-cy="searchbar"]').should('exist')
  })
  it('Should contain a dropdown menu with selectable options', () => {
    const baseUrl = Cypress.config('baseUrl')
    cy.get('[data-cy="mapui-dropdown"]').click
    cy.get('[data-cy="mapui-account"]').click
    cy.url().should('eq', `${baseUrl}/account`)
    cy.visit('/')
    cy.get('[data-cy="mapui-dropdown"]').click
    cy.get('[data-cy="mapui-organizations"]').click
    cy.url().should('eq', `${baseUrl}/organizations`)
    cy.visit('/')
    cy.get('[data-cy="mapui-dropdown"]').click
    cy.get('[data-cy="mapui-signout"]').click
    cy.get('[data-cy="auth-modal-wrapper"]').should('exist')
  })
})