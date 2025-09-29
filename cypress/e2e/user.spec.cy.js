import userData from '../fixtures/user-data.json'

describe('Orange HRM Test', () => {

  const selectorsList ={
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    logingButton:".oxd-button",
    sectionTitleTopBar:".oxd-topbar-header-title",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    employeeIdField:".oxd-input--active",
    otherIdField:".oxd-input--active",
    driversLicenceNumber:".oxd-input--active",
    dateField:".oxd-date-input-icon",
    dateCloseButton:".oxd-date-wrapper"

    
    
  }

  

  it.only('User Info Update- Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.logingButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
  //  cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.employeeIdField).eq(4).clear().type('Employee')
    cy.get(selectorsList.otherIdField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.driversLicenceNumber).eq(6).clear().type('DriversTest')
    cy.get(selectorsList.dateCloseButton).eq(0).click()
   // cy.get('body').should('contain', 'Success')

    
  })

  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logingButton).click()
    
})
})
