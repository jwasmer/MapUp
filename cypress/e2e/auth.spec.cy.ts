describe('User Auth', () => {
  it('Should display a user auth modal if user is not yet authenticated', () => {
    cy.visit('/') 
    cy.get('[data-cy="auth-modal-wrapper"]').should('exist')
  })
  it('Should not display a user auth modal if the user has been authenticated', () => {
    cy.login()
    cy.visit('/')
    cy.get('[data-cy="searchbar"]').should('exist')
  })
})