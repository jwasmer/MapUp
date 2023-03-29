const user = {
  "id": "ede3a087-5347-42d2-bef1-81f0db8dcc64",
  "aud": "authenticated",
  "email": "jameswasmer1@gmail.com",
  "phone": "",
  "app_metadata": {
      "provider": "google",
      "providers": [
          "google"
      ]
  },
  "user_metadata": {},
  "role": "authenticated",
  "aal": "aal1",
  "amr": [
      {
          "method": "oauth",
          "timestamp": 1679945346
      }
  ],
  "session_id": "069ebc8e-c2cd-4e5d-ab09-d89110740c1a"
}

describe('User Auth', () => {
  it('Should display a user auth modal if user is not yet authenticated', () => {
    cy.visit('http://localhost:3000') 
    cy.get('data-cy=["auth-modal-wrapper"]')
  })
  it('Should not display a user auth modal if user has been authenticated', () => {
    cy.login(user)
    cy.visit('http://localhost:3000')
  })
})