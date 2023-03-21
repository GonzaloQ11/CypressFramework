import LoginPage from '../pages/LoginPage'

describe('Login Tests', () => {
    const login = new LoginPage()

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('Login page is displayed', () => {
        login.getUserName().should('be.visible')
        login.getPassword().should('be.visible')
        login.getLoginButton().should('be.visible')
    });
  
    it('User can login successfully', () => {
        login.getUserName().type('Admin')
        login.getPassword().type('admin123')
        login.getLoginButton().click()
        cy.get('[class*=orangehrm-dashboard-grid]').should('be.visible')
      },
    );
  
    it('Username cannot be empty', () => {
        login.getLoginButton().click()
        login.getErrorMessage().should('be.visible')
        login.getUserName().should('match', '[class*=error]')
      },
    );
  
    it('Password cannot be empty', () => {
         loginPage.go();
        expect( loginPage.isLoginPageDisplayed()).toBe(true);
         loginPage.typeUsername(testdata.user.username);
         loginPage.clickLoginButton();
        expect( loginPage.isErrorMessageDisplayed()).toBe(true);
        expect( loginPage.getErrorMessage()).toBe(testdata.errorMessages.emptyPassword);
      },
    );
  
    it('Invalid credentials', () => {
         loginPage.go();
        expect( loginPage.isLoginPageDisplayed()).toBe(true);
         loginPage.login(testdata.user.username, testdata.user.invalidPassword);
        expect( loginPage.isErrorMessageDisplayed()).toBe(true);
        expect( loginPage.getErrorMessage()).toBe(testdata.errorMessages.invalidCredentials);
      },
    );
  
    it('User can login after a failed attempt', () => {
         loginPage.go();
        expect( loginPage.isLoginPageDisplayed()).toBe(true);
         loginPage.login(testdata.user.username, testdata.user.invalidPassword);
        expect( loginPage.isErrorMessageDisplayed()).toBe(true);
        expect( loginPage.getErrorMessage()).toBe(testdata.errorMessages.invalidCredentials);
         loginPage.login(testdata.user.username, testdata.user.password);
        expect( dashboardPage.isDashboardPageDisplayed()).toBe(true);
      },
    );
  });
  