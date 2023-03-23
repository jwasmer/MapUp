describe('User Auth', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Should display a user auth modal if user is not yet authenticated', () => {
    cy.visit('http://localhost:3000')
  })
  it('Should not display a user auth modal if user has been authenticated', () => {
    cy.visit('http://localhost:3000')
    cy.get('data-cy=["auth-modal-wrapper"]')
  })
})