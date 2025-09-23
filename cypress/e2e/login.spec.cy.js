import userData from '../fixtures/user-data.json'

describe('Orange HRM Test', () => {

  const selectorsList ={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    logingButton:".oxd-button",
    sectionTitleTopBar:".oxd-topbar-header-title"

  }

  

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.logingButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })

  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logingButton).click()
    
})
})
