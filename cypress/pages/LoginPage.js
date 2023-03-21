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
}