/// <reference types="cypress" />

Cypress.Commands.add('login', (user) => {
  cy.task('getUserSession', {
    user,
  }).then((sessionData) => {
    localStorage.setItem(
      'sb-localhost-auth-token',
      JSON.stringify(sessionData)
    );
  });
});