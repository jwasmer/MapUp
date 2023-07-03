/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST', 
    url: 'https://lgddjyttiuonovokmhnf.supabase.co/auth/v1/token?grant_type=password',
    headers: {
      apikey: Cypress.env('apikey'),
    },
    body: {
      email: Cypress.env('email'),
      password: Cypress.env('password'),
    }
  })
  .then((sessionData) => {
    cy.setCookie('supabase-auth-token', `["${sessionData.body.access_token}", "${sessionData.body.refresh_token}"]`)
  })
})