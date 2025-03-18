describe('User Login', () => {
    it('should login user and redirect', () => {
      cy.visit('http://localhost:3000/login');  // Your frontend login page
  
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="password"]').type('TestPass123');
      cy.get('button[type="submit"]').click();
  
      // Check if login successful (by checking token, redirect, etc.)
      cy.url().should('include', '/dashboard');
      cy.contains('Welcome, testuser'); // Example content after login
    });
  });
  