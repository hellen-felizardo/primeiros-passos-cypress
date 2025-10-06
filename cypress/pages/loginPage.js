class LoginPage{
    selectorsList() {
        const selectors = {
            usernameField:"[name='username']",
            passwordField:"[name='password']",
            logingButton:".orangehrm-login-button"
        }

        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username,password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().logingButton).click()
    }
}

export default LoginPage
