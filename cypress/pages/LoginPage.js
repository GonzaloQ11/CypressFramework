export default class LoginPage {
    getUserName() {
        return cy.get('[name=username]')
    }

    getPassword() {
        return cy.get('[name=password]')
    }

    getLoginButton() {
        return cy.get('button[class*=login]')
    }

    getErrorMessage() {
        return cy.get('[class*=error-message]')
    }

    getAlertMessage() {
        return cy.get('[class*=alert-content-text]')
    }
}