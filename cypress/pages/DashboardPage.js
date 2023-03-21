export default class DashboardPage {
    getDashboard() {
        return cy.get('[class*=orangehrm-dashboard-grid]')
    }
}