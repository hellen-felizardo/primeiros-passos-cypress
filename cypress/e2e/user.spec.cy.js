import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Test', () => {

  const selectorsList ={
    
    
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:".oxd-date-input-icon",
    dateCloseButton:".oxd-date-wrapper"
  }

  

  it.only('User Info Update- Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    8cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
  //  cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversTest')
    cy.get(selectorsList.dateField).eq(0).type('2025-3-10')
    cy.get(selectorsList.dateCloseButton).eq(0).click({force:true})
  //  cy.get('body').should('contain', 'Success')
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get(':nth-child(3) > span').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

    
  })

  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.logingButton).click()
    
})
})
