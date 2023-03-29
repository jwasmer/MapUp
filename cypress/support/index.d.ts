declare namespace Cypress {
  interface Chainable<Subject = any> {
      login(user: any): Chainable<any>
  }
}