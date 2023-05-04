/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
  cy.task('getUserSession')
  .then((sessionData) => {
    localStorage.setItem(
      'sb-localhost-auth-token',
      JSON.stringify(sessionData)
    );
  });
});