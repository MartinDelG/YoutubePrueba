
/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Probar la visualización de short en youtube ', () => {
    beforeEach(() => {

      cy.visit('https://www.youtube.com')
    })
  
    it('Ingresar a la página de shorts', () => {
      cy.get('a[title="Shorts"]').click();
      cy.url().should('include', '/shorts');//Revisar que si entre a los shorts
      cy.wait(5000); //Delay para que carge todo bn

     

     
    }); 
    it('Verificar que lo visto es un objeto tipo short', () => {
      cy.get('a[title="Shorts"]').click();
      cy.url().should('include', '/shorts');//Revisar que si entre a los shorts
        // Verifica que hay un contenedor para Shorts
        cy.get('#short-video-container').should('exist'); 

    }); 
    it('Verificar que existe un reproductor de video para el short', () => {
      cy.get('a[title="Shorts"]').click();
      cy.url().should('include', '/shorts');//Revisar que si entre a los shorts

       cy.get('ytd-player#player').should('exist'); 

    }); 
    it('Verificar que el video se esta reproduciendo y es visible', () => {
      cy.get('a[title="Shorts"]').click();
      cy.url().should('include', '/shorts');//Revisar que si entre a los shorts

      cy.get('ytd-player video').should('be.visible');
      cy.get('ytd-player video').then(($video) => {
        expect($video[0].paused).to.be.false;
      });

    }); 
  

  })
  