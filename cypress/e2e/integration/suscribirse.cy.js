/// <reference types="cypress" />

context('Suscribirse a canal desde un video', () => {
    it('debería hacer clic en el botón "Suscribirse" y verificar redirección', () => {
      cy.visit('https://www.youtube.com/watch?v=FJAwbTsV6JA&pp=ygUYdW5pdmVyc2lkYWQgZGUgbG9zIGFuZGVz');
  
      cy.contains('Suscribirse', { timeout: 10000 })
        .should('be.visible')
        .click();
  

    });
  });
  