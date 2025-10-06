class MyInfoPage {

    selectorsList() {
        const selectors ={
        firstNameField:"[name='firstName']",
        lastNameField:"[name='lastName']",
        genericField:".oxd-input--active",
        dateField:".oxd-date-input-icon",
        dateCloseButton:".oxd-date-wrapper"
        }

        return selectors
    }
    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  //    cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }
    fillEmployeeDetails(employeeId, otherId, driversLicense, date) {
       cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
       cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
       cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
       cy.get(this.selectorsList().dateField).eq(0).type(date)
    }
    saveForm(){
         cy.get(this.selectorsList().dateCloseButton).eq(0).click({force:true})
     //  cy.get('body').should('contain', 'Success')
    }
    fillStatus() {
        
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force:true})
    cy.get(':nth-child(3) > span').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()


    }

}

export default MyInfoPage