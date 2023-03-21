import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage';

describe('Login Tests', () => {
    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('Login page is displayed', () => {
        loginPage.getUserName().should('be.visible')
        loginPage.getPassword().should('be.visible')
        loginPage.getLoginButton().should('be.visible')
    });
  
    it('User can login successfully', () => {
        loginPage.getUserName().type('Admin')
        loginPage.getPassword().type('admin123')
        loginPage.getLoginButton().click()
        dashboardPage.getDashboard().should('be.visible')
      },
    );
  
    it('Username cannot be empty', () => {
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('be.visible')
        loginPage.getUserName().should('match', '[class*=error]')
      },
    );
  
    it('Password cannot be empty', () => {
        loginPage.getUserName().type('Admin')
        loginPage.getLoginButton().click()
        loginPage.getErrorMessage().should('be.visible')
        loginPage.getPassword().should('match', '[class*=error]')
      },
    );
  
    it('Invalid credentials', () => {
      loginPage.getUserName().type('Admin')
      loginPage.getPassword().type('fakepassword')
      loginPage.getLoginButton().click()
      loginPage.getAlertMessage().should('be.visible')
      loginPage.getAlertMessage().should('have.text', 'Invalid credentials')
      },
    );
  
    it('User can login after a failed attempt', () => {
      loginPage.getUserName().type('Admin')
      loginPage.getPassword().type('fakepassword')
      loginPage.getLoginButton().click()
      loginPage.getAlertMessage().should('be.visible')
      loginPage.getUserName().type('Admin')
      loginPage.getPassword().type('admin123')
      loginPage.getLoginButton().click()
      dashboardPage.getDashboard().should('be.visible')
      },
    );
  });
  