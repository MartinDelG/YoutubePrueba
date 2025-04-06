/// <reference types="cypress" />

context('tendencias', () => {
    beforeEach(() => {
      cy.visit('https://www.youtube.com/feed/trending')
    })
  
    it('debería hacer clic en el primer video de tendencias', () => {
      cy.get('ytd-video-renderer', { timeout: 10000 })
        .first().click()

    })
  })
